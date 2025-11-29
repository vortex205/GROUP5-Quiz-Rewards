'use client'
import React from 'react'
import Sidebar from '../../../components/Sidebar'

export default function Supply(){
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar p-6"><Sidebar/></aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Supply Chain Race</h1>
        <p className="text-gray-300 mt-2">Click steps in correct production order within time (demo)</p>
        <div className="mt-6 container-glass p-6">
          <ol className="list-decimal pl-5">
            <li>Procurement</li>
            <li>Production</li>
            <li>Quality Check</li>
            <li>Distribution</li>
          </ol>
          <div className="mt-4"><button className="neon-button">Start Race</button></div>
        </div>
      </main>
    </div>
  )
}