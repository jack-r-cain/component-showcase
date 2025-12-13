// src/content/section.tsx
import Section from '@/components/layout/Section'
import Container from '@/components/layout/Container'

export default function SectionDemo() {
  return (
    <div className='space-y-12 py-4'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Section</h1>
        <p className='text-lg text-neutral-600'>
          A semantic section component with responsive vertical spacing.
        </p>
      </div>

      {/* Basic Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Basic Usage</h2>
        <p className='text-neutral-700'>
          The Section component provides consistent vertical spacing for page sections.
        </p>
        <div className='border border-neutral-200 rounded-lg overflow-hidden'>
          <Section>
            <div className='bg-primary-100 p-4 rounded'>
              <h3 className='font-semibold mb-2'>Section Content</h3>
              <p className='text-neutral-800'>
                Sections automatically apply responsive vertical padding.
              </p>
            </div>
          </Section>
        </div>
      </div>

      {/* Responsive Spacing Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Responsive Spacing</h2>
        <p className='text-neutral-700'>
          The Section adjusts its vertical padding based on screen size.
        </p>
        <ul className='list-disc list-inside space-y-2 text-neutral-700'>
          <li>Mobile: 2rem (py-8) vertical padding</li>
          <li>Desktop: 3rem (md:py-12) vertical padding</li>
          <li>Semantic HTML5 section element</li>
        </ul>
      </div>

      {/* With Container Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Combined with Container</h2>
        <p className='text-neutral-700'>
          Sections are commonly used with Container for full-width backgrounds with centered content.
        </p>
        <div className='border border-neutral-200 rounded-lg overflow-hidden'>
          <Section className='bg-accent-50'>
            <Container>
              <h3 className='font-semibold mb-2'>Full-Width Background</h3>
              <p className='text-neutral-800'>
                The section has a full-width background while the container centers the content.
              </p>
            </Container>
          </Section>
        </div>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Sections accept custom className props for additional styling.
        </p>
        <div className='space-y-4'>
          <Section className='bg-primary-50 border border-primary-200'>
            <Container>
              <p className='text-neutral-800'>Section with custom background and border</p>
            </Container>
          </Section>
          <Section className='bg-gradient-to-r from-primary-50 to-accent-50'>
            <Container>
              <p className='text-neutral-800'>Section with gradient background</p>
            </Container>
          </Section>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Use Cases</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border border-neutral-200 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>Page Sections</h3>
            <p className='text-sm text-neutral-600'>
              Divide pages into distinct sections with consistent spacing.
            </p>
          </div>
          <div className='border border-neutral-200 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>Full-Width Backgrounds</h3>
            <p className='text-sm text-neutral-600'>
              Create sections with backgrounds that span the full viewport width.
            </p>
          </div>
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Section from '@/components/layout/Section'
import Container from '@/components/layout/Container'

<Section>
  <Container>
    <h2>Section Title</h2>
    <p>Section content...</p>
  </Container>
</Section>

<Section className="bg-gray-50">
  <Container>
    <p>Section with background</p>
  </Container>
</Section>`}</code>
        </pre>
      </div>
    </div>
  )
}
