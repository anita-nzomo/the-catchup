'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'

export default function SignupPage() {
  const supabase = useMemo(() => createClient(), [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    setSuccess('Check your email to confirm your account.')
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-cream">
      <section className="mx-auto max-w-md px-6 py-14">
        <div className="rounded-3xl bg-forest p-8 text-parchment shadow-xl ring-1 ring-forest/30">
          <header className="mb-6">
            <p className="text-parchment/85 font-semibold tracking-wide">New account</p>
            <h1 className="mt-2 font-headings text-3xl leading-tight">Start writing</h1>
            <p className="mt-3 text-sm text-parchment/90">
              Create a space for letters, notes, and quiet updates.
            </p>
          </header>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-parchment/90">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-xl border border-parchment/40 bg-forest/20 px-3 text-ink placeholder:text-parchment/60 outline-none transition focus:border-teal/70"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm text-parchment/90">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 rounded-xl border border-parchment/40 bg-forest/20 px-3 text-ink placeholder:text-parchment/60 outline-none transition focus:border-teal/70"
                placeholder="Create a password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-teal px-5 font-semibold text-cream transition hover:brightness-105 disabled:opacity-70"
            >
              {loading ? 'Starting…' : 'Start writing'}
            </button>

            {success ? (
              <div className="rounded-xl border border-parchment/30 bg-forest/30 p-3 text-sm text-parchment">
                {success}
              </div>
            ) : null}

            {error ? (
              <div className="rounded-xl border border-parchment/30 bg-forest/30 p-3 text-sm text-parchment">
                {error}
              </div>
            ) : null}

            <p className="mt-2 text-center text-sm text-parchment/85">
              Already have an account?{' '}
              <Link href="/login" className="text-parchment underline underline-offset-4">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

