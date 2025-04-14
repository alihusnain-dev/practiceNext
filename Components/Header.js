import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-2xl font-bold">MyNextPractice</div>
            <nav className="space-x-4">
                <Link href="/ToDo" className="hover:text-gray-400">ToDo List</Link>
                <Link href="/about" className="hover:text-gray-400">About</Link>
                <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </nav>
        </header>
    </>
  )
}

export default Header