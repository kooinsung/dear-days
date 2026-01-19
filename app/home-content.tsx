'use client'

import Link from 'next/link'
import { useUpcomingEvents } from '@/hooks/use-events'
import { getCategoryIcon, getCategoryLabel } from '@/libs/helpers'
import type { Event } from '@/libs/supabase/database.types'
import { calculateDday, formatDday } from '@/libs/utils'
import * as styles from './home-content.css'

export function HomeContent() {
  const { data: events, isLoading, error } = useUpcomingEvents()

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <p className={styles.loadingText}>로딩 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>이벤트를 불러오는데 실패했습니다.</p>
      </div>
    )
  }

  const upcomingEvents = events || []

  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>다가오는 이벤트</h2>
        <Link href="/event/past" className={styles.pastLink}>
          지난 이벤트 보기 →
        </Link>
      </div>

      {upcomingEvents.length === 0 ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyTitle}>등록된 이벤트가 없습니다</p>
          <p className={styles.emptyDescription}>
            새 이벤트를 추가하여 소중한 날을 기억하세요!
          </p>
        </div>
      ) : (
        <div className={styles.eventList}>
          {upcomingEvents.map((event: Event) => {
            const dday = calculateDday(event.solar_date)
            const ddayText = formatDday(dday)
            const primaryDate =
              event.calendar_type === 'SOLAR'
                ? event.solar_date
                : event.lunar_date || event.solar_date
            const calendarLabel =
              event.calendar_type === 'SOLAR' ? '양력' : '음력'
            const isToday = dday === 0

            return (
              <Link
                key={event.id}
                href={`/event/detail?id=${event.id}`}
                className={styles.eventCard}
              >
                {/* D-Day */}
                <div className={styles.ddayContainer}>
                  <span
                    className={isToday ? styles.ddayToday : styles.ddayNormal}
                  >
                    {ddayText}
                  </span>
                </div>

                {/* 이벤트 정보 */}
                <div className={styles.eventInfo}>
                  <div className={styles.eventTitleRow}>
                    <span className={styles.eventIcon}>
                      {getCategoryIcon(event.category)}
                    </span>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                  </div>

                  <div className={styles.eventDateRow}>
                    <p className={styles.eventDate}>{primaryDate}</p>
                    <span className={styles.calendarBadge}>
                      {calendarLabel}
                    </span>
                  </div>

                  {event.note && (
                    <p className={styles.eventNote}>{event.note}</p>
                  )}
                </div>

                {/* 카테고리 라벨 */}
                <div className={styles.categoryLabel}>
                  {getCategoryLabel(event.category)}
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </section>
  )
}
