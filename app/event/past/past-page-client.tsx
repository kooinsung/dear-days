'use client'

import Link from 'next/link'
import { getCategoryIcon, getCategoryLabel } from '@/libs/helpers'
import type { CategoryType, Event } from '@/libs/supabase/database.types'
import * as styles from './past-page-client.css'

interface PastPageClientProps {
  events: Event[]
  filterCategory?: CategoryType
  groupedEvents: Record<string, Event[]>
}

// 경과 일수 계산
function calculateDaysAgo(targetDate: string): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(targetDate)
  target.setHours(0, 0, 0, 0)
  const diffTime = today.getTime() - target.getTime()
  return Math.floor(diffTime / (1000 * 60 * 60 * 24))
}

export function PastPageClient({
  groupedEvents,
  filterCategory,
}: PastPageClientProps) {
  const categories: { value: CategoryType | 'ALL'; label: string }[] = [
    { value: 'ALL', label: '전체' },
    { value: 'BIRTHDAY', label: '생일' },
    { value: 'ANNIVERSARY', label: '기념일' },
    { value: 'MEMORIAL', label: '기일' },
  ]

  return (
    <div className={styles.pageContainer}>
      {/* 헤더 */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backLink}>
            ← 뒤로
          </Link>
          <h1 className={styles.title}>지난 이벤트</h1>
          <div className={styles.spacer} />
        </div>
      </header>

      {/* 필터 */}
      <div className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterList}>
            {categories.map((cat) => {
              const isActive =
                (cat.value === 'ALL' && !filterCategory) ||
                cat.value === filterCategory

              return (
                <Link
                  key={cat.value}
                  href={
                    cat.value === 'ALL'
                      ? '/event/past'
                      : `/event/past?category=${cat.value}`
                  }
                  className={`${styles.filterButton} ${
                    isActive
                      ? styles.filterButtonActive
                      : styles.filterButtonInactive
                  }`}
                >
                  {cat.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className={styles.contentContainer}>
        {Object.keys(groupedEvents).length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>지난 이벤트가 없습니다</p>
          </div>
        ) : (
          <div className={styles.eventList}>
            {Object.entries(groupedEvents).map(([yearMonth, monthEvents]) => (
              <div key={yearMonth} className={styles.monthGroup}>
                <h2 className={styles.monthTitle}>
                  {yearMonth.replace('.', '년 ')}월
                </h2>

                <div className={styles.eventGrid}>
                  {monthEvents.map((event) => {
                    const daysAgo = calculateDaysAgo(event.solar_date)
                    const displayDate =
                      event.calendar_type === 'SOLAR'
                        ? event.solar_date
                        : event.lunar_date || event.solar_date

                    return (
                      <Link
                        key={event.id}
                        href={`/event/detail?id=${event.id}`}
                        className={styles.eventCard}
                      >
                        <div className={styles.eventHeader}>
                          <span className={styles.eventIcon}>
                            {getCategoryIcon(event.category)}
                          </span>
                          <span className={styles.eventDaysAgo}>
                            {daysAgo}일 전
                          </span>
                        </div>

                        <h3 className={styles.eventTitle}>{event.title}</h3>

                        <p className={styles.eventDate}>
                          {displayDate}
                          {' · '}
                          {event.calendar_type === 'SOLAR' ? '양력' : '음력'}
                        </p>

                        <span className={styles.eventCategory}>
                          {getCategoryLabel(event.category)}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
