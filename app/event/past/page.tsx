import { redirect } from 'next/navigation'
import type { CategoryType, Event } from '@/libs/supabase/database.types'
import { createSupabaseServer } from '@/libs/supabase/server'
import { PastPageClient } from './past-page-client'

// 년월 그룹핑
function groupByYearMonth(events: Event[]): Record<string, Event[]> {
  const grouped: Record<string, Event[]> = {}

  for (const event of events) {
    const date = new Date(event.solar_date)
    const yearMonth = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`

    if (!grouped[yearMonth]) {
      grouped[yearMonth] = []
    }
    grouped[yearMonth].push(event)
  }

  return grouped
}

export default async function PastPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: CategoryType }>
}) {
  const params = await searchParams
  const filterCategory = params.category

  const supabase = await createSupabaseServer()
  const { data: userData } = await supabase.auth.getUser()

  if (!userData.user) {
    redirect('/login')
  }

  // 지난 이벤트 조회 (오늘 이전)
  const today = new Date().toISOString().split('T')[0]
  let query = supabase
    .from('events')
    .select('*')
    .lt('solar_date', today)
    .order('solar_date', { ascending: false })

  if (filterCategory) {
    query = query.eq('category', filterCategory)
  }

  const { data: eventsData } = await query

  const events = eventsData || []
  const groupedEvents = groupByYearMonth(events)

  return (
    <PastPageClient
      events={events}
      filterCategory={filterCategory}
      groupedEvents={groupedEvents}
    />
  )
}
