// src/components/app/sidebar.tsx
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

  return (
    <aside className='w-60 sticky top-0 self-start pl-4 py-4 border-r border-neutral-200 h-[calc(100vh-4rem)] overflow-y-auto'>
      <nav className='space-y-8'>
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className='font-semibold text-sm text-neutral-900 mb-3'>
              {section.title}
            </h3>
            <ul className='space-y-2'>
              {section.items.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        'block text-sm px-3 py-1.5 rounded-md transition-colors',
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
  )
}
