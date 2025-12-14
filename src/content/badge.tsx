// src/content/badge.tsx
import Badge from '@/components/ui/Badge'

export default function BadgeDemo() {
  return (
    <div className='space-y-8 md:space-y-12 px-2 md:px-0'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Badge</h1>
        <p className='text-lg text-neutral-600'>
          A small badge component for labels, tags, and status indicators.
        </p>
      </div>

      {/* Variants Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Variants</h2>
        <div className='flex flex-wrap gap-4'>
          <Badge variant='default'>Default</Badge>
          <Badge variant='primary'>Primary</Badge>
          <Badge variant='success'>Success</Badge>
          <Badge variant='error'>Error</Badge>
          <Badge variant='warning'>Warning</Badge>
          <Badge variant='accent'>Accent</Badge>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Use Cases</h2>
        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-medium mb-3'>Status Indicators</h3>
            <div className='flex flex-wrap gap-4'>
              <Badge variant='success'>Active</Badge>
              <Badge variant='warning'>Pending</Badge>
              <Badge variant='error'>Inactive</Badge>
              <Badge variant='default'>Draft</Badge>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium mb-3'>Categories</h3>
            <div className='flex flex-wrap gap-4'>
              <Badge variant='primary'>Technology</Badge>
              <Badge variant='accent'>Design</Badge>
              <Badge variant='default'>Business</Badge>
              <Badge variant='primary'>Development</Badge>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium mb-3'>Notifications</h3>
            <div className='flex flex-wrap gap-4 items-center'>
              <span className='text-sm text-neutral-700'>
                Messages <Badge variant='primary'>3</Badge>
              </span>
              <span className='text-sm text-neutral-700'>
                Alerts <Badge variant='error'>12</Badge>
              </span>
              <span className='text-sm text-neutral-700'>
                Updates <Badge variant='success'>New</Badge>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Badges can be customized with additional className props for styling.
        </p>
        <div className='flex flex-wrap gap-4'>
          <Badge>Default Badge</Badge>
          <Badge className='text-lg px-4 py-1'>Large Badge</Badge>
          <Badge className='uppercase font-bold'>Bold Badge</Badge>
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Badge from '@/components/ui/Badge'

<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>`}</code>
        </pre>
      </div>
    </div>
  )
}
