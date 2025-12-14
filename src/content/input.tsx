// src/content/input.tsx
import Input from '@/components/ui/Input'

export default function InputDemo() {
  return (
    <div className='space-y-8 md:space-y-12 px-2 md:px-0'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Input</h1>
        <p className='text-lg text-neutral-600'>
          A text input component with label support and validation states.
        </p>
      </div>

      {/* Variants Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Variants</h2>
        <div className='flex flex-col gap-4 max-w-md'>
          <Input variant='default' placeholder='Default input' />
          <Input variant='error' placeholder='Error state input' />
        </div>
      </div>

      {/* With Labels Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>With Labels</h2>
        <div className='flex flex-col gap-4 max-w-md'>
          <Input label='Email' type='email' placeholder='Enter your email' />
          <Input
            label='Password'
            type='password'
            placeholder='Enter your password'
          />
          <Input label='Full Name' placeholder='John Doe' />
        </div>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Inputs can be customized with additional props like disabled and
          placeholder.
        </p>
        <div className='flex flex-col gap-4 max-w-md'>
          <Input placeholder='Enabled input' />
          <Input placeholder='Disabled input' disabled />
          <Input
            placeholder='With custom class'
            className='border-accent-500'
          />
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Input from '@/components/ui/Input'

<Input variant="default" placeholder="Enter text" />
<Input label="Email" type="email" variant="error" />`}</code>
        </pre>
      </div>
    </div>
  )
}
