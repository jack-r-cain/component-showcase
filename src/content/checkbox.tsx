// src/content/checkbox.tsx
'use client'

import { useState } from 'react'
import Checkbox from '@/components/ui/Checkbox'

export default function CheckboxDemo() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)
  const [checked3, setChecked3] = useState(false)

  return (
    <div className='space-y-8 md:space-y-12 px-2 md:px-0'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Checkbox</h1>
        <p className='text-lg text-neutral-600'>
          A checkbox input component with label support and customizable styling.
        </p>
      </div>

      {/* Basic Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Basic Checkboxes</h2>
        <div className='flex flex-col gap-4'>
          <Checkbox />
          <Checkbox defaultChecked />
          <Checkbox disabled />
          <Checkbox disabled defaultChecked />
        </div>
      </div>

      {/* With Labels Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>With Labels</h2>
        <div className='flex flex-col gap-4'>
          <Checkbox label='Accept terms and conditions' />
          <Checkbox label='Subscribe to newsletter' defaultChecked />
          <Checkbox label='Enable notifications' />
        </div>
      </div>

      {/* Controlled Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Controlled</h2>
        <p className='text-neutral-700'>
          Checkboxes can be controlled with state for dynamic interactions.
        </p>
        <div className='flex flex-col gap-4'>
          <Checkbox
            label='Controlled checkbox 1'
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
          />
          <Checkbox
            label='Controlled checkbox 2'
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
          />
          <Checkbox
            label='Controlled checkbox 3'
            checked={checked3}
            onChange={(e) => setChecked3(e.target.checked)}
          />
        </div>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Checkboxes can be customized with additional props like disabled and className.
        </p>
        <div className='flex flex-col gap-4'>
          <Checkbox label='Enabled checkbox' />
          <Checkbox label='Disabled checkbox' disabled />
          <Checkbox
            label='Custom styled checkbox'
            className='text-accent-500'
          />
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Checkbox from '@/components/ui/Checkbox'

<Checkbox />
<Checkbox label="Accept terms" defaultChecked />
<Checkbox label="Enable feature" disabled />`}</code>
        </pre>
      </div>
    </div>
  )
}
