import { redirect } from 'next/navigation'
import { createSupabaseServer } from '@/libs/supabase/server'
import { HomePageClient } from './home-page-client'

export default async function HomePage() {
  const supabase = await createSupabaseServer()
  const { data } = await supabase.auth.getUser()

  if (!data.user) {
    redirect('/login')
  }

  return <HomePageClient />
}
