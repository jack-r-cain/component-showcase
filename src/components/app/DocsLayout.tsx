import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

export default function DocsLayout() {
  return (
    <div className='flex gap-4 md:gap-6'>
      <Sidebar />
      <main className='flex-1 min-w-0 max-w-4xl justify-center md:pl-0 px-2'>
        <Outlet />
      </main>
    </div>
  )
}
