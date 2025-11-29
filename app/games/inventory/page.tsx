'use client'
import React from 'react'
import Sidebar from '../../../components/Sidebar'

export default function Inventory(){
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar p-6"><Sidebar/></aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Inventory Tycoon</h1>
        <p className="text-gray-300 mt-2">Manage stock to avoid overstock and shortages (demo)</p>
        <div className="mt-6 container-glass p-6">
          <p>Current stock: 120</p>
          <div className="mt-4"><button className="neon-button">Order More</button></div>
        </div>
      </main>
    </div>
  )
}