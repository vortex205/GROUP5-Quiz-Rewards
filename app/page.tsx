'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function Page() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const emailGuess = username.includes('@') ? username : `${username}@group5.test`
      const res = await supabase.auth.signInWithPassword({ email: emailGuess, password })
      if (res.error) {
        setError(res.error.message)
      } else {
        router.push('/dashboard')
      }
    } catch (err: any) {
      setError(err.message || 'Sign in failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-8 container-glass">
        <div className="flex flex-col items-center gap-6">
          <Image src="/g5-logo.svg" alt="G5" width={160} height={160} />
          <h1 className="text-3xl glow-text font-extrabold">Welcome back to GROUP5</h1>
          <p className="text-sm text-gray-300">TBA Quiz & Rewards — login to continue</p>
        </div>
        <form onSubmit={handleSignIn} className="mt-6 flex flex-col gap-4">
          <input className="input-neon" placeholder="Username or email" value={username} onChange={(e)=>setUsername(e.target.value)} />
          <input type="password" className="input-neon" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          {error && <div className="text-red-400">{error}</div>}
          <button className="neon-button mt-2" disabled={loading}>{loading? 'Signing in...' : 'Login'}</button>
        </form>
        <div className="mt-6 text-xs text-gray-400">If you are Elvis (admin) use username "elvis" and password provided. For seeded accounts the email is username@group5.test</div>
      </div>
    </main>
  )
}