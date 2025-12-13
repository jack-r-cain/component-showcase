// src/content/shell.tsx
import Shell from '@/components/layout/Shell'

export default function ShellDemo() {
  return (
    <div className='space-y-12 py-4'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Shell</h1>
        <p className='text-lg text-neutral-600'>
          A root layout component that provides a flex container with full viewport height.
        </p>
      </div>

      {/* Basic Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Basic Usage</h2>
        <p className='text-neutral-700'>
          The Shell component is typically used as the root layout wrapper for your application.
        </p>
        <div className='border border-neutral-200 rounded-lg p-4 bg-neutral-50'>
          <Shell>
            <div className='bg-primary-100 p-4 rounded'>Header Content</div>
            <div className='bg-neutral-100 p-4 rounded flex-1'>Main Content</div>
            <div className='bg-primary-100 p-4 rounded'>Footer Content</div>
          </Shell>
        </div>
      </div>

      {/* Properties Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Properties</h2>
        <p className='text-neutral-700'>
          The Shell component provides a minimal flex column layout that spans the full viewport height.
        </p>
        <ul className='list-disc list-inside space-y-2 text-neutral-700'>
          <li>Full viewport height (min-h-screen)</li>
          <li>Flex column layout</li>
          <li>No padding or margins by default</li>
        </ul>
      </div>

      {/* Use Cases Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Use Cases</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border border-neutral-200 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>App Layout</h3>
            <p className='text-sm text-neutral-600'>
              Wrap your entire application to ensure consistent layout structure.
            </p>
          </div>
          <div className='border border-neutral-200 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>Page Wrapper</h3>
            <p className='text-sm text-neutral-600'>
              Use as a base for pages that need header and footer sections.
            </p>
          </div>
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Shell from '@/components/layout/Shell'

<Shell>
  <Header />
  <Main />
  <Footer />
</Shell>`}</code>
        </pre>
      </div>
    </div>
  )
}
