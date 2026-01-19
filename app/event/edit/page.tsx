import { redirect } from 'next/navigation'
import { createSupabaseServer } from '@/libs/supabase/server'
import { EventEditPageClient } from './edit-page-client'

export default async function EditPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const params = await searchParams
  const eventId = params.id

  const supabase = await createSupabaseServer()
  const { data: userData } = await supabase.auth.getUser()

  if (!userData.user) {
    redirect('/login')
  }

  return <EventEditPageClient eventId={eventId} />
}
