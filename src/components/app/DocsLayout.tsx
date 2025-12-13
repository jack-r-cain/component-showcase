import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

export default function DocsLayout() {
  return (
    <div className='flex gap-8'>
      <Sidebar />
      <div className='flex-1 max-w-4xl'>
        <Outlet />
      </div>
    </div>
  )
}
