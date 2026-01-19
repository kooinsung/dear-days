import { type NextRequest, NextResponse } from 'next/server'
import { createSupabaseServer } from '@/libs/supabase/server'

export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { title, category, solar_date, lunar_date, calendar_type, note } = body

  const { data, error } = await supabase.from('events').insert({
    user_id: user.id,
    title,
    category,
    solar_date,
    lunar_date,
    calendar_type,
    note,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, data })
}
