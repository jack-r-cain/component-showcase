// src/content/textarea.tsx
import Textarea from '@/components/ui/Textarea'

export default function TextareaDemo() {
  return (
    <div className='space-y-8 md:space-y-12 px-2 md:px-0'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Textarea</h1>
        <p className='text-lg text-neutral-600'>
          A multi-line text input component with label support and validation states.
        </p>
      </div>

      {/* Variants Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Variants</h2>
        <div className='flex flex-col gap-4 max-w-md'>
          <Textarea variant='default' placeholder='Default textarea' rows={4} />
          <Textarea variant='error' placeholder='Error state textarea' rows={4} />
        </div>
      </div>

      {/* With Labels Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>With Labels</h2>
        <div className='flex flex-col gap-4 max-w-md'>
          <Textarea label='Message' placeholder='Enter your message' rows={4} />
          <Textarea label='Description' placeholder='Add a description' rows={6} />
          <Textarea label='Comments' placeholder='Your comments here' rows={3} />
        </div>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Textareas can be customized with additional props like disabled, rows, and resize behavior.
        </p>
        <div className='flex flex-col gap-4 max-w-md'>
          <Textarea placeholder='Enabled textarea' rows={3} />
          <Textarea placeholder='Disabled textarea' disabled rows={3} />
          <Textarea placeholder='With custom class' className='border-accent-500' rows={3} />
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Textarea from '@/components/ui/Textarea'

<Textarea variant="default" placeholder="Enter text" rows={4} />
<Textarea label="Message" variant="error" rows={6} />`}</code>
        </pre>
      </div>
    </div>
  )
}
