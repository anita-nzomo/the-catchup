'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import SignOutButton from './signOutButton'

export default function DashboardPage() {
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace('/login')
        return
      }
      setEmail(data.session.user.email ?? null)
    })
  }, [router])

  return (
    <main className="min-h-screen bg-cream">
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-3xl bg-forest p-8 text-parchment shadow-xl ring-1 ring-forest/30">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-parchment/85 font-semibold tracking-wide">Dashboard</p>
              <h1 className="mt-2 font-headings text-3xl">Your writing space</h1>
              <p className="mt-3 text-parchment/90">
                Signed in as{' '}
                <span className="font-semibold text-parchment">{email ?? '…'}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <SignOutButton />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-parchment/15 bg-forest/40 p-5">
            <p className="text-parchment/90 leading-relaxed">
              This is a starting point. Next we can add your letters, chronicle entries, and
              guided prompts—still warm and editorial, never corporate.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

