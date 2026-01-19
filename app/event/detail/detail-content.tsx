'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDeleteEvent } from '@/hooks/use-events'
import { getCategoryIcon, getCategoryLabel } from '@/libs/helpers'
import type { Event } from '@/libs/supabase/database.types'
import { calculateDday, formatDday } from '@/libs/utils'
import { useUIStore } from '@/stores/ui-store'
import * as styles from './detail-content.css'

interface EventDetailContentProps {
  event: Event
  eventId: string
}

export function EventDetailContent({
  event,
  eventId,
}: EventDetailContentProps) {
  const router = useRouter()
  const showToast = useUIStore((state) => state.showToast)
  const deleteEvent = useDeleteEvent()

  const handleDelete = async () => {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return
    }

    try {
      await deleteEvent.mutateAsync(event.id)
      showToast('이벤트가 삭제되었습니다', 'success')
      router.push('/')
      router.refresh()
    } catch (_error) {
      showToast('삭제에 실패했습니다', 'error')
    }
  }

  const dday = calculateDday(event.solar_date)
  const ddayText = formatDday(dday)
  const isToday = dday === 0

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backLink}>
            ← 뒤로
          </Link>
          <Link
            href={`/event/edit?id=${eventId}`}
            className={styles.editButton}
          >
            편집
          </Link>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.ddayCard}>
          <p className={styles.ddayLabel}>D-Day</p>
          <p
            className={`${styles.ddayValue} ${isToday ? styles.ddayToday : styles.ddayFuture}`}
          >
            {ddayText}
          </p>
          <h2 className={styles.eventTitle}>{event.title}</h2>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoSection}>
            <p className={styles.infoLabel}>카테고리</p>
            <div className={styles.categoryBadge}>
              <span className={styles.categoryIcon}>
                {getCategoryIcon(event.category)}
              </span>
              <span>{getCategoryLabel(event.category)}</span>
            </div>
          </div>

          <div className={styles.infoSection}>
            <p className={styles.infoLabel}>날짜 정보</p>
            <div className={styles.dateGrid}>
              <div>
                <p className={styles.infoLabel}>양력</p>
                <p className={styles.infoValue}>{event.solar_date}</p>
              </div>
              {event.lunar_date && (
                <div>
                  <p className={styles.infoLabel}>음력</p>
                  <p className={styles.infoValue}>{event.lunar_date}</p>
                </div>
              )}
            </div>
          </div>

          {event.note && (
            <div className={styles.infoSection}>
              <p className={styles.infoLabel}>메모</p>
              <p className={styles.infoValue}>{event.note}</p>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleDelete}
          disabled={deleteEvent.isPending}
          className={styles.deleteButton}
        >
          {deleteEvent.isPending ? '삭제 중...' : '이벤트 삭제'}
        </button>
      </div>
    </div>
  )
}
