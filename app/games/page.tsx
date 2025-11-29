'use client'
import React from 'react'
import Sidebar from '../../components/Sidebar'
import Link from 'next/link'

export default function GamesPage(){
  const games = [
    {id:'cashflow', name:'Cash Flow Challenge', href:'/games/cashflow'},
    {id:'marketing', name:'Marketing Mix Master', href:'/games/marketing'},
    {id:'inventory', name:'Inventory Tycoon', href:'/games/inventory'},
    {id:'supply', name:'Supply Chain Race', href:'/games/supply'}
  ]
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar p-6"><Sidebar /></aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Business Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {games.map(g=> (
            <div key={g.id} className="container-glass p-6">
              <h3 className="font-semibold">{g.name}</h3>
              <Link className="neon-button inline-block mt-4" href={g.href}>Play</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}