'use client'
import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar'

export default function Cashflow(){
  const [items, setItems] = useState([
    {id:1, text:'Salary', type:'income'},
    {id:2, text:'Rent', type:'expense'},
    {id:3, text:'Sales', type:'income'},
    {id:4, text:'Supplies', type:'expense'}
  ])

  return (
    <div className="flex min-h-screen">
      <aside className="sidebar p-6"><Sidebar/></aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Cash Flow Challenge</h1>
        <p className="mt-2 text-gray-300">Drag & drop to balance income and expenses (simplified demo).</p>
        <div className="mt-6 container-glass p-6">
          {items.map(it => (
            <div key={it.id} className="p-3 border-b border-gray-800">{it.text} — {it.type}</div>
          ))}
          <div className="mt-4"><button className="neon-button">Submit</button></div>
        </div>
      </main>
    </div>
  )
}