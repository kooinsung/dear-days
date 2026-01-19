import type { CategoryType, Event } from '../supabase/database.types'
import { calculateDday, formatDday } from '../utils'

/**
 * 이벤트 헬퍼
 * 이벤트 도메인에 특화된 헬퍼 함수들
 */

// 카테고리 아이콘
export function getCategoryIcon(category: CategoryType | string): string {
  switch (category) {
    case 'BIRTHDAY':
      return '🎂'
    case 'ANNIVERSARY':
      return '💝'
    case 'MEMORIAL':
      return '🕯️'
    case 'HOLIDAY':
      return '🎉'
    default:
      return '📅'
  }
}

// 카테고리 라벨
export function getCategoryLabel(category: CategoryType | string): string {
  switch (category) {
    case 'BIRTHDAY':
      return '생일'
    case 'ANNIVERSARY':
      return '기념일'
    case 'MEMORIAL':
      return '기일'
    case 'HOLIDAY':
      return '공휴일'
    default:
      return '기타'
  }
}

// 카테고리 색상
export function getCategoryColor(category: CategoryType | string): string {
  switch (category) {
    case 'BIRTHDAY':
      return '#ff6b9d'
    case 'ANNIVERSARY':
      return '#ff6347'
    case 'MEMORIAL':
      return '#6c757d'
    case 'HOLIDAY':
      return '#ffd700'
    default:
      return '#4f46e5'
  }
}

// 이벤트 표시 날짜 가져오기
export function getEventDisplayDate(event: Event): string {
  return event.calendar_type === 'SOLAR'
    ? event.solar_date
    : event.lunar_date || event.solar_date
}

// 이벤트 달력 타입 라벨
export function getCalendarTypeLabel(event: Event): string {
  return event.calendar_type === 'SOLAR' ? '양력' : '음력'
}

// 이벤트 D-Day 계산 및 포맷팅
export function getEventDday(event: Event): {
  days: number
  text: string
  isToday: boolean
  isPast: boolean
} {
  const days = calculateDday(event.solar_date)
  const text = formatDday(days)
  const isToday = days === 0
  const isPast = days < 0

  return { days, text, isToday, isPast }
}

// 이벤트 정렬 (D-Day 기준)
export function sortEventsByDday(events: Event[]): Event[] {
  return [...events].sort((a, b) => {
    const ddayA = calculateDday(a.solar_date)
    const ddayB = calculateDday(b.solar_date)
    return ddayA - ddayB
  })
}

// 이벤트를 월별로 그룹화
export function groupEventsByMonth(events: Event[]): Record<string, Event[]> {
  return events.reduce(
    (acc, event) => {
      const date = new Date(event.solar_date)
      const yearMonth = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`

      if (!acc[yearMonth]) {
        acc[yearMonth] = []
      }
      acc[yearMonth].push(event)

      return acc
    },
    {} as Record<string, Event[]>,
  )
}

// 이벤트를 카테고리별로 그룹화
export function groupEventsByCategory(
  events: Event[],
): Record<CategoryType, Event[]> {
  return events.reduce(
    (acc, event) => {
      if (!acc[event.category]) {
        acc[event.category] = []
      }
      acc[event.category].push(event)

      return acc
    },
    {} as Record<CategoryType, Event[]>,
  )
}
