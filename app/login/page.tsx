import { createSupabaseServer } from '@/libs/supabase/server'
import { LoginPageClient } from './login-page-client'

export default async function LoginPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return <LoginPageClient initialUser={session?.user || null} />
}
