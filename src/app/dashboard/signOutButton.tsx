'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function SignOutButton() {
  const router = useRouter()

  async function onSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <button
      type="button"
      onClick={onSignOut}
      className="inline-flex h-11 items-center justify-center rounded-xl bg-teal px-5 font-semibold text-cream transition hover:brightness-105"
    >
      Sign out
    </button>
  )
}

