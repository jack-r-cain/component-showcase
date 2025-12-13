export default function Installation() {
  return (
    <div className='space-y-8 my-4'>
      <div>
        <h1 className='text-4xl font-bold mb-4'>Installation</h1>
        <p className='text-lg text-neutral-600'>
          Set up Cain UI in your React project in just a few steps.
        </p>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>1. Create a new project</h2>
        <p className='text-neutral-700'>
          Start by creating a new React project with Vite and TypeScript:
        </p>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>npm create vite@latest my-app -- --template react-ts</code>
        </pre>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>2. Install dependencies</h2>
        <p className='text-neutral-700'>
          Install Tailwind CSS v4 and the required utilities:
        </p>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>
            npm install tailwindcss@next clsx tailwind-merge
            class-variance-authority react-router
          </code>
        </pre>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>3. Configure Tailwind</h2>
        <p className='text-neutral-700'>
          Create{' '}
          <code className='bg-neutral-100 px-1.5 py-0.5 rounded text-sm'>
            postcss.config.js
          </code>
          :
        </p>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}`}</code>
        </pre>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>4. Set up path aliases</h2>
        <p className='text-neutral-700'>
          Update{' '}
          <code className='bg-neutral-100 px-1.5 py-0.5 rounded text-sm'>
            tsconfig.json
          </code>
          :
        </p>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto text-sm'>
          <code>{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}</code>
        </pre>
        <p className='text-neutral-700 mt-4'>
          Update{' '}
          <code className='bg-neutral-100 px-1.5 py-0.5 rounded text-sm'>
            vite.config.ts
          </code>
          :
        </p>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto text-sm'>
          <code>{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`}</code>
        </pre>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>5. Add the design system</h2>
        <p className='text-neutral-700'>
          Copy the Mountain Dawn design system to your{' '}
          <code className='bg-neutral-100 px-1.5 py-0.5 rounded text-sm'>
            src/index.css
          </code>
          . This includes color variables, fonts, and base styles.
        </p>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>6. Add the utilities</h2>
        <p className='text-neutral-700'>
          Create{' '}
          <code className='bg-neutral-100 px-1.5 py-0.5 rounded text-sm'>
            src/lib/utils.ts
          </code>
          :
        </p>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}</code>
        </pre>
      </div>
    </div>
  )
}
