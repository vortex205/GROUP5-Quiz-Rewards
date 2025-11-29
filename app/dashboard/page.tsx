'use client'
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function DashboardPage(){
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar p-6">
        <Sidebar />
      </aside>
      <section className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="container-glass p-6"> 
            <h2 className="text-lg font-bold">Welcome back,</h2>
            <p className="text-sm text-gray-300">Your progress and quick actions</p>
          </div>
          <div className="container-glass p-6">
            <h3>Points</h3>
            <div className="text-3xl font-bold">0</div>
          </div>
          <div className="container-glass p-6">
            <h3>Badge</h3>
            <div>Beginner ⭐</div>
          </div>
        </div>

        <div className="mt-6 container-glass p-6">
          <h3 className="font-semibold">Today's tasks</h3>
          <p className="text-sm text-gray-300">Complete 3–5 questions to earn points and streaks.</p>
        </div>
      </section>
    </div>
  )
}