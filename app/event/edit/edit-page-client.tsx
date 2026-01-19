'use client'

import Link from 'next/link'
import * as styles from './edit-page-client.css'
import EventForm from './event-form'

export function EventEditPageClient({ eventId }: { eventId?: string }) {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link
            href={eventId ? `/event/detail?id=${eventId}` : '/'}
            className={styles.backLink}
          >
            ← 뒤로
          </Link>
          <h1 className={styles.title}>
            {eventId ? '이벤트 수정' : '새 이벤트'}
          </h1>
          <div className={styles.spacer} />
        </div>
      </header>

      <div className={styles.formContainer}>
        <div className={styles.formCard}>
          <EventForm eventId={eventId} />
        </div>
      </div>
    </div>
  )
}
