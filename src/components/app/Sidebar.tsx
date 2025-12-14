// src/components/app/sidebar.tsx
'use client'

import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { cn } from '@/lib/utils'

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/getting-started' },
      { title: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    title: 'Inputs',
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Textarea', href: '/docs/components/textarea' },
      { title: 'Select', href: '/docs/components/select' },
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Radio', href: '/docs/components/radio' },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Avatar', href: '/docs/components/avatar' },
    ],
  },
  {
    title: 'Feedback',
    items: [{ title: 'Dialog', href: '/docs/components/dialog' }],
  },
  {
    title: 'Layout',
    items: [
      { title: 'Shell', href: '/docs/components/shell' },
      { title: 'Container', href: '/docs/components/container' },
      { title: 'Section', href: '/docs/components/section' },
    ],
  },
]

export default function Sidebar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-neutral-200 rounded-md shadow-sm'
        aria-label='Toggle menu'>
        <svg
          className='w-5 h-5 text-neutral-700'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          {isOpen ? (
            <path d='M6 18L18 6M6 6l12 12' />
          ) : (
            <path d='M4 6h16M4 12h16M4 18h16' />
          )}
        </svg>
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className='md:hidden fixed inset-0 bg-black/20 z-30'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed md:sticky top-0 left-0 h-screen md:h-auto md:self-start z-40 pl-2',
          'w-56 md:w-52 bg-white md:bg-transparent',
          'border-r md:border-r-0 border-neutral-200',
          'transition-transform duration-300 ease-in-out',
          'overflow-y-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}>
        <nav className='space-y-6 p-4 md:p-0 pt-16 md:pt-0'>
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className='font-semibold text-xs text-neutral-900 mb-2'>
                {section.title}
              </h3>
              <ul className='space-y-1'>
                {section.items.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'block text-xs px-2 py-1.5 rounded-md transition-colors',
                          isActive
                            ? 'bg-primary-100 text-primary-700 font-medium'
                            : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                        )}>
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
