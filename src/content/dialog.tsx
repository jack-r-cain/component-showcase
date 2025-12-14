// src/content/dialog.tsx
'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/Dialog'
import Button from '@/components/ui/Button'

export default function DialogDemo() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  return (
    <div className='space-y-8 md:space-y-12 px-2 md:px-0'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Dialog</h1>
        <p className='text-lg text-neutral-600'>
          A modal dialog component with backdrop and ESC key support.
        </p>
      </div>

      {/* Basic Dialog Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Basic Dialog</h2>
        <Button onClick={() => setOpen1(true)}>Open Basic Dialog</Button>
        <Dialog open={open1} onClose={() => setOpen1(false)}>
          <DialogContent>
            <DialogTitle>Basic Dialog</DialogTitle>
            <DialogDescription>
              This is a simple dialog with a title and description.
            </DialogDescription>
            <DialogFooter>
              <Button variant='outline' onClick={() => setOpen1(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Dialog with Actions Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>With Actions</h2>
        <Button onClick={() => setOpen2(true)}>Open Dialog with Actions</Button>
        <Dialog open={open2} onClose={() => setOpen2(false)}>
          <DialogContent>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to proceed with this action? This cannot be
              undone.
            </DialogDescription>
            <DialogFooter>
              <Button variant='outline' onClick={() => setOpen2(false)}>
                Cancel
              </Button>
              <Button variant='primary' onClick={() => setOpen2(false)}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Dialogs can contain any custom content and multiple action buttons.
        </p>
        <Button onClick={() => setOpen3(true)}>Open Custom Dialog</Button>
        <Dialog open={open3} onClose={() => setOpen3(false)}>
          <DialogContent>
            <DialogTitle>Custom Dialog</DialogTitle>
            <DialogDescription>
              This dialog demonstrates custom content and styling options.
            </DialogDescription>
            <div className='my-4 space-y-2'>
              <p className='text-sm text-neutral-600'>
                You can add any custom content here, including forms, lists, or
                other components.
              </p>
            </div>
            <DialogFooter>
              <Button variant='ghost' onClick={() => setOpen3(false)}>
                Maybe Later
              </Button>
              <Button variant='outline' onClick={() => setOpen3(false)}>
                Not Now
              </Button>
              <Button variant='primary' onClick={() => setOpen3(false)}>
                Got It
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`'use client'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/Dialog'
import Button from '@/components/ui/Button'

const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Dialog</Button>
<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogContent>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Description here</DialogDescription>
    <DialogFooter>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}</code>
        </pre>
      </div>
    </div>
  )
}
