// In App.tsx
import { Routes, Route, Navigate } from 'react-router'
import Shell from '@/components/layout/Shell'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import Footer from '@/components/layout/Footer'
import DocsLayout from '@/components/app/DocsLayout'
import ScrollToTop from '@/components/app/ScrollToTop'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import Installation from './pages/Installation'
import ComponentDemo from './pages/ComponentDemo'

export default function App() {
  return (
    <Shell>
      <ScrollToTop />
      <Header
        title='Cain UI'
        routes={[
          { label: 'Home', href: '/' },
          { label: 'Docs', href: '/docs/getting-started' },
        ]}
      />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />

          {/* Docs routes with sidebar */}
          <Route path='/docs' element={<DocsLayout />}>
            <Route
              index
              element={<Navigate to='/docs/getting-started' replace />}
            />
            <Route path='getting-started' element={<GettingStarted />} />
            <Route path='installation' element={<Installation />} />
            <Route path='components/:component' element={<ComponentDemo />} />
          </Route>
        </Routes>
      </Main>
      <Footer />
    </Shell>
  )
}
