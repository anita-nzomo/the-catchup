'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { createClient } from '@/lib/supabase'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace('/dashboard')
    })
  }, [router])

  return (
    <main className="min-h-screen bg-cream">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-forest p-10 shadow-xl ring-1 ring-forest/30">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-parchment/90 font-semibold tracking-wide">
                A quiet place to keep in touch
              </p>
              <h1 className="mt-3 font-headings text-4xl leading-tight text-parchment sm:text-5xl">
                Staying human across distance.
              </h1>
            </div>

            <p className="max-w-xl text-parchment/90">
              The CatchUp is your personal letter and chronicle platform—so the stories you share
              can travel, and your people can feel close.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/signup"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-teal px-5 text-cream font-semibold transition hover:brightness-105"
              >
                Start writing
              </Link>
              <Link
                href="/login"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-parchment/40 bg-transparent px-5 text-parchment font-semibold transition hover:bg-parchment/10"
              >
                I already have an account
              </Link>
            </div>

            <div className="mt-3 rounded-2xl border border-parchment/15 bg-forest/40 p-4">
              <p className="text-sm text-parchment/85">
                Warm, editorial writing—made for real life, not corporate dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

