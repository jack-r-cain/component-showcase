// src/content/radio.tsx
'use client'

import { useState } from 'react'
import Radio from '@/components/ui/Radio'

export default function RadioDemo() {
  const [selected1, setSelected1] = useState('option1')
  const [selected2, setSelected2] = useState('medium')

  return (
    <div className='space-y-12 py-4'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Radio</h1>
        <p className='text-lg text-neutral-600'>
          A radio button input component with label support for single-choice selections.
        </p>
      </div>

      {/* Basic Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Basic Radio Buttons</h2>
        <div className='flex flex-col gap-4'>
          <Radio name='basic' />
          <Radio name='basic' defaultChecked />
          <Radio name='basic' disabled />
        </div>
      </div>

      {/* With Labels Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>With Labels</h2>
        <div className='flex flex-col gap-4'>
          <Radio name='labeled' label='Option A' />
          <Radio name='labeled' label='Option B' defaultChecked />
          <Radio name='labeled' label='Option C' />
        </div>
      </div>

      {/* Controlled Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Controlled Radio Groups</h2>
        <p className='text-neutral-700'>
          Radio buttons can be controlled with state for dynamic interactions.
        </p>
        <div className='space-y-6'>
          <div className='flex flex-col gap-3'>
            <p className='text-sm font-medium text-neutral-700'>
              Choose an option:
            </p>
            <Radio
              name='controlled1'
              label='Option 1'
              value='option1'
              checked={selected1 === 'option1'}
              onChange={(e) => setSelected1(e.target.value)}
            />
            <Radio
              name='controlled1'
              label='Option 2'
              value='option2'
              checked={selected1 === 'option2'}
              onChange={(e) => setSelected1(e.target.value)}
            />
            <Radio
              name='controlled1'
              label='Option 3'
              value='option3'
              checked={selected1 === 'option3'}
              onChange={(e) => setSelected1(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-3'>
            <p className='text-sm font-medium text-neutral-700'>
              Select size:
            </p>
            <Radio
              name='controlled2'
              label='Small'
              value='small'
              checked={selected2 === 'small'}
              onChange={(e) => setSelected2(e.target.value)}
            />
            <Radio
              name='controlled2'
              label='Medium'
              value='medium'
              checked={selected2 === 'medium'}
              onChange={(e) => setSelected2(e.target.value)}
            />
            <Radio
              name='controlled2'
              label='Large'
              value='large'
              checked={selected2 === 'large'}
              onChange={(e) => setSelected2(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Radio buttons can be customized with additional props like disabled and className.
        </p>
        <div className='flex flex-col gap-4'>
          <Radio name='custom' label='Enabled radio' />
          <Radio name='custom' label='Disabled radio' disabled />
          <Radio
            name='custom'
            label='Custom styled radio'
            className='text-accent-500'
          />
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Radio from '@/components/ui/Radio'

<Radio name="group1" label="Option A" />
<Radio name="group1" label="Option B" defaultChecked />
<Radio name="group1" label="Option C" disabled />`}</code>
        </pre>
      </div>
    </div>
  )
}
