'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCreateEvent, useEvent, useUpdateEvent } from '@/hooks/use-events'
import type { CalendarType, CategoryType } from '@/libs/supabase/database.types'
import { useUIStore } from '@/stores/ui-store'
import * as styles from './event-form.css'

interface EventFormProps {
  eventId?: string
}

export default function EventForm({ eventId }: EventFormProps) {
  const router = useRouter()
  const showToast = useUIStore((state) => state.showToast)

  const { data: existingEvent, isLoading: isLoadingEvent } = useEvent(
    eventId || null,
  )

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<CategoryType>('BIRTHDAY')
  const [solarDate, setSolarDate] = useState('')
  const [lunarDate, setLunarDate] = useState('')
  const [calendarType, setCalendarType] = useState<CalendarType>('SOLAR')
  const [note, setNote] = useState('')

  useEffect(() => {
    if (existingEvent) {
      setTitle(existingEvent.title)
      setCategory(existingEvent.category)
      setSolarDate(existingEvent.solar_date)
      setLunarDate(existingEvent.lunar_date || '')
      setCalendarType(existingEvent.calendar_type)
      setNote(existingEvent.note || '')
    }
  }, [existingEvent])

  const createEvent = useCreateEvent()
  const updateEvent = useUpdateEvent()

  const categories: { value: CategoryType; label: string; icon: string }[] = [
    { value: 'BIRTHDAY', label: '생일', icon: '🎂' },
    { value: 'ANNIVERSARY', label: '기념일', icon: '💝' },
    { value: 'MEMORIAL', label: '기일', icon: '🕯️' },
    { value: 'HOLIDAY', label: '공휴일', icon: '🎉' },
    { value: 'OTHER', label: '기타', icon: '📅' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (eventId) {
        await updateEvent.mutateAsync({
          id: eventId,
          updates: {
            title,
            category,
            solar_date: solarDate,
            lunar_date: lunarDate || null,
            calendar_type: calendarType,
            note: note || null,
          },
        })
        showToast('이벤트가 수정되었습니다', 'success')
      } else {
        await createEvent.mutateAsync({
          title,
          category,
          solar_date: solarDate,
          lunar_date: lunarDate || null,
          calendar_type: calendarType,
          note: note || null,
        })
        showToast('이벤트가 생성되었습니다', 'success')
      }

      router.push('/')
      router.refresh()
    } catch (_error) {
      showToast('저장에 실패했습니다', 'error')
    }
  }

  const isSubmitting = createEvent.isPending || updateEvent.isPending

  if (eventId && isLoadingEvent) {
    return <div className={styles.loadingContainer}>로딩 중...</div>
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* 카테고리 */}
      <div className={styles.formGroup}>
        <div className={styles.label}>카테고리</div>
        <div className={styles.categoryGrid}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategory(cat.value)}
              className={`${styles.categoryButton} ${category === cat.value ? styles.categoryButtonActive : ''}`}
            >
              <span className={styles.categoryIcon}>{cat.icon}</span>
              <span className={styles.categoryLabel}>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 제목 */}
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>
          제목 <span className={styles.required}>*</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="예: 엄마 생일"
          required
          className={styles.input}
        />
      </div>

      {/* 달력 유형 */}
      <div className={styles.formGroup}>
        <div className={styles.label}>달력 유형</div>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="calendarType"
              checked={calendarType === 'SOLAR'}
              onChange={() => setCalendarType('SOLAR')}
              className={styles.radio}
            />
            양력
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="calendarType"
              checked={calendarType === 'LUNAR'}
              onChange={() => setCalendarType('LUNAR')}
              className={styles.radio}
            />
            음력
          </label>
        </div>
      </div>

      {/* 양력 날짜 */}
      <div className={styles.formGroup}>
        <label htmlFor="solarDate" className={styles.label}>
          양력 날짜 <span className={styles.required}>*</span>
        </label>
        <input
          id="solarDate"
          type="date"
          value={solarDate}
          onChange={(e) => setSolarDate(e.target.value)}
          required
          className={styles.input}
        />
      </div>

      {/* 음력 날짜 */}
      {calendarType === 'LUNAR' && (
        <div className={styles.formGroup}>
          <label htmlFor="lunarDate" className={styles.label}>
            음력 날짜 (선택)
          </label>
          <input
            id="lunarDate"
            type="date"
            value={lunarDate}
            onChange={(e) => setLunarDate(e.target.value)}
            className={styles.input}
          />
        </div>
      )}

      {/* 메모 */}
      <div className={styles.formGroup}>
        <label htmlFor="note" className={styles.label}>
          메모 (선택)
        </label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="메모를 입력하세요..."
          className={styles.textarea}
        />
      </div>

      {/* 제출 버튼 */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`${styles.button} ${styles.primaryButton}`}
      >
        {isSubmitting ? '저장 중...' : eventId ? '수정하기' : '저장하기'}
      </button>
    </form>
  )
}
