// src/content/select.tsx
import Select from '@/components/ui/Select'

export default function SelectDemo() {
  return (
    <div className='space-y-12 py-4'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Select</h1>
        <p className='text-lg text-neutral-600'>
          A dropdown select component with label support and validation states.
        </p>
      </div>

      {/* Variants Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Variants</h2>
        <div className='flex flex-col gap-4 max-w-md'>
          <Select
            variant='default'
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
            ]}
          />
          <Select
            variant='error'
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
            ]}
          />
        </div>
      </div>

      {/* With Labels Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>With Labels</h2>
        <div className='flex flex-col gap-4 max-w-md'>
          <Select
            label='Country'
            options={[
              { value: 'us', label: 'United States' },
              { value: 'ca', label: 'Canada' },
              { value: 'mx', label: 'Mexico' },
            ]}
          />
          <Select
            label='Category'
            options={[
              { value: 'tech', label: 'Technology' },
              { value: 'design', label: 'Design' },
              { value: 'business', label: 'Business' },
            ]}
          />
          <Select
            label='Priority'
            options={[
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
            ]}
          />
        </div>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Selects can be customized with additional props like disabled and custom styling.
        </p>
        <div className='flex flex-col gap-4 max-w-md'>
          <Select
            options={[
              { value: '1', label: 'Enabled Option 1' },
              { value: '2', label: 'Enabled Option 2' },
            ]}
          />
          <Select
            disabled
            options={[
              { value: '1', label: 'Disabled Option 1' },
              { value: '2', label: 'Disabled Option 2' },
            ]}
          />
          <Select
            className='border-accent-500'
            options={[
              { value: '1', label: 'Custom Style 1' },
              { value: '2', label: 'Custom Style 2' },
            ]}
          />
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Select from '@/components/ui/Select'

<Select
  variant="default"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
/>
<Select
  label="Category"
  variant="error"
  options={[
    { value: 'tech', label: 'Technology' },
    { value: 'design', label: 'Design' }
  ]}
/>`}</code>
        </pre>
      </div>
    </div>
  )
}
