// src/content/container.tsx
import Container from '@/components/layout/Container'

export default function ContainerDemo() {
  return (
    <div className='space-y-8 md:space-y-12 px-2 md:px-0'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Container</h1>
        <p className='text-lg text-neutral-600'>
          A responsive container component with automatic centering and padding.
        </p>
      </div>

      {/* Basic Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Basic Usage</h2>
        <p className='text-neutral-700'>
          The Container component centers content and applies responsive horizontal padding.
        </p>
        <div className='border border-neutral-200 rounded-lg overflow-hidden'>
          <Container>
            <div className='bg-primary-100 p-4 rounded'>
              <p className='text-neutral-800'>
                This content is automatically centered with responsive padding.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Responsive Padding Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Responsive Padding</h2>
        <p className='text-neutral-700'>
          The Container adjusts its horizontal padding based on screen size.
        </p>
        <ul className='list-disc list-inside space-y-2 text-neutral-700'>
          <li>Mobile: 1rem (px-4) padding</li>
          <li>Desktop: 1.5rem (md:px-6) padding</li>
          <li>Max width constrained by container class</li>
        </ul>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          The Container accepts custom className props for additional styling.
        </p>
        <div className='space-y-4'>
          <Container className='bg-accent-50'>
            <div className='p-4'>
              <p className='text-neutral-800'>Container with custom background</p>
            </div>
          </Container>
          <Container className='border border-primary-300'>
            <div className='p-4'>
              <p className='text-neutral-800'>Container with custom border</p>
            </div>
          </Container>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Use Cases</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border border-neutral-200 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>Page Content</h3>
            <p className='text-sm text-neutral-600'>
              Wrap page content to maintain consistent maximum width and padding.
            </p>
          </div>
          <div className='border border-neutral-200 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>Section Wrapper</h3>
            <p className='text-sm text-neutral-600'>
              Use within sections to control content width while allowing section backgrounds to span full width.
            </p>
          </div>
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Container from '@/components/layout/Container'

<Container>
  <h1>Page Title</h1>
  <p>Page content here...</p>
</Container>

<Container className="bg-gray-50">
  <p>Custom styled container</p>
</Container>`}</code>
        </pre>
      </div>
    </div>
  )
}
