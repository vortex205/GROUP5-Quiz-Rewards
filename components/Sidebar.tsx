'use client'
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function Sidebar(){
  const role = typeof window !== 'undefined' && localStorage.getItem('g5_role') ? localStorage.getItem('g5_role') : 'STUDENT'
  const isAdmin = role === 'ADMIN'
  return (
    <nav className="flex flex-col gap-4">
      <div className="mb-4"><Link href="/dashboard" className="font-bold text-lg">GROUP5</Link></div>
      <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-800">Dashboard</Link>
      <Link href="/announcements" className="block p-2 rounded hover:bg-gray-800">Announcements</Link>
      <Link href="/tasks" className="block p-2 rounded hover:bg-gray-800">Tasks</Link>
      <Link href="/games" className="block p-2 rounded hover:bg-gray-800">Business Games</Link>
      <Link href="/leaderboard" className="block p-2 rounded hover:bg-gray-800">Leaderboard</Link>
      <Link href="/profile" className="block p-2 rounded hover:bg-gray-800">Profile</Link>

      {isAdmin && (
        <div className="mt-6 pt-4 border-t border-gray-800">
          <div className="text-xs text-gray-400">Admin</div>
          <Link href="/admin" className="block p-2 rounded hover:bg-gray-800">Admin Dashboard</Link>
          <Link href="/admin/generate" className="block p-2 rounded hover:bg-gray-800">Generate Questions</Link>
          <Link href="/admin/announcements" className="block p-2 rounded hover:bg-gray-800">Create Announcement</Link>
          <Link href="/admin/users" className="block p-2 rounded hover:bg-gray-800">Manage Users</Link>
        </div>
      )}
    </nav>
  )
}