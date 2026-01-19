'use client'

import Link from 'next/link'
import type { CategoryType } from '@/libs/supabase/database.types'
import * as styles from './calendar-page-client.css'

interface MonthData {
  month: number
  name: string
  events: Record<CategoryType, number>
}

interface CalendarPageClientProps {
  monthsData: MonthData[]
  currentYear: number
}

const CATEGORY_COLORS: Record<CategoryType, string> = {
  BIRTHDAY: '#ff6b9d',
  ANNIVERSARY: '#ff6347',
  MEMORIAL: '#6c757d',
  HOLIDAY: '#ffd700',
  OTHER: '#4f46e5',
}

const CATEGORY_LABELS: Record<CategoryType, string> = {
  BIRTHDAY: '생일',
  ANNIVERSARY: '기념일',
  MEMORIAL: '기일',
  HOLIDAY: '공휴일',
  OTHER: '기타',
}

export function CalendarPageClient({
  monthsData,
  currentYear,
}: CalendarPageClientProps) {
  return (
    <div className={styles.pageContainer}>
      {/* 헤더 */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backLink}>
            ← 홈
          </Link>
          <div className={styles.yearNavigation}>
            <Link
              href={`/calendar?year=${currentYear - 1}`}
              className={styles.yearButton}
            >
              ◀
            </Link>
            <h1 className={styles.yearTitle}>{currentYear}년</h1>
            <Link
              href={`/calendar?year=${currentYear + 1}`}
              className={styles.yearButton}
            >
              ▶
            </Link>
          </div>
          <div className={styles.spacer} />
        </div>
      </header>

      {/* 12개월 그리드 */}
      <div className={styles.contentContainer}>
        <div className={styles.monthGrid}>
          {monthsData.map((monthData) => {
            const totalEvents = Object.values(monthData.events).reduce(
              (a, b) => a + b,
              0,
            )
            const hasEvents = totalEvents > 0

            return (
              <div key={monthData.month} className={styles.monthCard}>
                {/* 월 이름 */}
                <h3 className={styles.monthName}>{monthData.name}</h3>

                {/* 이벤트 요약 */}
                <div className={styles.categoryList}>
                  {hasEvents ? (
                    <>
                      {(
                        Object.entries(monthData.events) as [
                          CategoryType,
                          number,
                        ][]
                      ).map(([category, count]) =>
                        count > 0 ? (
                          <div key={category} className={styles.categoryItem}>
                            <div
                              className={styles.categoryDot}
                              style={{
                                backgroundColor: CATEGORY_COLORS[category],
                              }}
                            />
                            <span className={styles.categoryLabel}>
                              {CATEGORY_LABELS[category]}
                            </span>
                            <span className={styles.categoryCount}>
                              {count}개
                            </span>
                          </div>
                        ) : null,
                      )}
                    </>
                  ) : (
                    <span className={styles.emptyText}>이벤트 없음</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
