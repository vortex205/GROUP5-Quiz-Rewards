'use client'
import React from 'react'
import Sidebar from '../../../components/Sidebar'

export default function Marketing(){
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar p-6"><Sidebar/></aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Marketing Mix Master</h1>
        <p className="text-gray-300 mt-2">Pick the correct 4Ps for the scenario (demo).</p>
        <div className="mt-6 container-glass p-6">
          <p className="mb-4">Scenario: Launching an affordable water bottle brand</p>
          <div className="grid grid-cols-1 gap-3">
            <button className="input-neon text-left">Product: Durable, affordable bottle</button>
            <button className="input-neon text-left">Price: Premium pricing</button>
            <button className="input-neon text-left">Place: Urban supermarkets</button>
            <button className="input-neon text-left">Promotion: Mass radio ads</button>
          </div>
          <div className="mt-4"><button className="neon-button">Submit</button></div>
        </div>
      </main>
    </div>
  )
}