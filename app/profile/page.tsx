'use client'
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function ProfilePage(){
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar p-6"><Sidebar/></aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="mt-6 container-glass p-6">
          <p>Username: elvis</p>
          <p>Points: 12000</p>
        </div>
      </main>
    </div>
  )
}