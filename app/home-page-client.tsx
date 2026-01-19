'use client'

import Link from 'next/link'
import { HomeContent } from './home-content'
import * as styles from './home-page-client.css'

export function HomePageClient() {
  return (
    <div className={styles.pageContainer}>
      {/* 헤더 */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>Dear Days</h1>
          <div className={styles.headerButtons}>
            <Link href="/event/edit" className={styles.addButton}>
              + 새 이벤트
            </Link>
            <Link href="/calendar" className={styles.calendarButton}>
              📅 캘린더
            </Link>
          </div>
        </div>
      </header>

      {/* 콘텐츠 영역 */}
      <div className={styles.content}>
        <HomeContent />
      </div>
    </div>
  )
}
