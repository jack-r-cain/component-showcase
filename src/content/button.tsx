// src/content/button.tsx
import Button from '@/components/ui/Button'

export default function ButtonDemo() {
  return (
    <div className='space-y-8 md:space-y-12 px-2 md:px-0'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Button</h1>
        <p className='text-lg text-neutral-600'>
          A versatile button component with multiple variants and sizes.
        </p>
      </div>

      {/* Variants Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Variants</h2>
        <div className='flex flex-wrap gap-4'>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='destructive'>Destructive</Button>
        </div>
      </div>

      {/* Sizes Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Sizes</h2>
        <div className='flex flex-wrap items-center gap-4'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Buttons can be customized with additional props like disabled,
          loading, and icon support.
        </p>
        <div className='flex flex-wrap items-center gap-4'>
          <Button className='bg-accent-500'>Primary Accent</Button>
          <Button>Medium</Button>
          <Button>Large</Button>
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Button from '@/components/ui/Button'

<Button variant="primary">Click me</Button>
<Button variant="outline" size="lg">Large Outline</Button>`}</code>
        </pre>
      </div>
    </div>
  )
}
