'use client'
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function Leaderboard(){
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar p-6"><Sidebar/></aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <div className="mt-6 container-glass p-6">
          <ol>
            <li>1. Elvis — 12000</li>
            <li>2. Tariq — 3200</li>
            <li>3. Mohammed — 2800</li>
          </ol>
        </div>
      </main>
    </div>
  )
}