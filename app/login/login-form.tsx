'use client'

import type { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import { generateNaverAuthUrl } from '@/libs/naver/oauth'
import { createSupabaseBrowser } from '@/libs/supabase/browser'
import { login, logout } from './actions'
import * as styles from './login-form.css'

interface LoginFormProps {
  initialUser: User | null
}

export default function LoginForm({ initialUser }: LoginFormProps) {
  const supabase = createSupabaseBrowser()
  const router = useRouter()

  const [user, setUser] = useState<User | null>(initialUser)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isPending, startTransition] = useTransition()

  // 세션 변화 감지
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => data.subscription.unsubscribe()
  }, [supabase])

  // ✅ Email 로그인 (Server Action 직접 호출)
  const handleEmailLogin = () => {
    startTransition(async () => {
      const result = await login(email, password)

      if (result?.error) {
        setMessage(result.error)
        return
      }

      router.push('/')
    })
  }

  // OAuth
  const oauthLogin = async (provider: 'google' | 'kakao') => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.origin },
    })
  }

  const naverLogin = () => {
    const state = crypto.randomUUID()
    sessionStorage.setItem('naver_state', state)
    window.location.href = generateNaverAuthUrl(state)
  }

  const handleLogout = () => {
    startTransition(async () => {
      await logout()
      setUser(null)
      router.push('/login')
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Dear Days</h1>

        {user ? (
          <div className={styles.userInfo}>
            <p className={styles.userEmail}>{user.email ?? user.id}</p>
            <button
              type="button"
              onClick={handleLogout}
              className={`${styles.button} ${styles.primaryButton}`}
              disabled={isPending}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <>
            {message && <div className={styles.message}>{message}</div>}

            <div className={styles.formGroup}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <button
                type="button"
                onClick={handleEmailLogin}
                disabled={isPending}
                className={`${styles.button} ${styles.primaryButton}`}
              >
                {isPending ? '로그인 중...' : '이메일 로그인'}
              </button>
            </div>

            <div className={styles.divider} />

            <div className={styles.oauthButtonGroup}>
              <button
                type="button"
                onClick={() => oauthLogin('google')}
                className={`${styles.button} ${styles.secondaryButton}`}
              >
                Google 로그인
              </button>
              <button
                type="button"
                onClick={() => oauthLogin('kakao')}
                className={`${styles.button} ${styles.secondaryButton}`}
              >
                Kakao 로그인
              </button>
              <button
                type="button"
                onClick={naverLogin}
                className={`${styles.button} ${styles.secondaryButton}`}
              >
                Naver 로그인
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
