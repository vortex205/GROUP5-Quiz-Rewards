'use client'
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function TasksPage(){
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar p-6">
        <Sidebar />
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {['BUSINESS ACCOUNTING','PRINCIPLES OF MARKETING','INTRODUCTION TO PRODUCTION','OPERATION MANAGEMENT','INTRODUCTION TO BUSINESS LAW','STORES ADMIN & INVENTORY CONTROL'].map(sub => (
            <div key={sub} className="container-glass p-6">
              <h3 className="font-semibold">{sub}</h3>
              <p className="text-sm text-gray-300 mt-2">Tap to start the 5-question task for today.</p>
              <div className="mt-4">
                <button className="neon-button">Start Task</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}