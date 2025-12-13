export default function GettingStarted() {
  return (
    <div className='space-y-8 my-4'>
      <div>
        <h1 className='text-4xl font-bold mb-4'>Getting Started</h1>
        <p className='text-lg text-neutral-600'>
          Build beautiful, accessible React applications with Cain UI - a
          collection of thoughtfully crafted components built with Tailwind CSS.
        </p>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Philosophy</h2>
        <p className='text-neutral-700'>
          Cain UI is designed for developers who want full control over their
          components. Instead of installing a package, you copy the source code
          directly into your project. This means you own the code and can
          customize it however you need.
        </p>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Features</h2>
        <ul className='list-disc list-inside space-y-2 text-neutral-700'>
          <li>Built with Tailwind CSS v4 and TypeScript</li>
          <li>Fully accessible components following WAI-ARIA guidelines</li>
          <li>Composable and customizable with className props</li>
          <li>Variant support using class-variance-authority</li>
          <li>Mountain Dawn color palette inspired by Blue Ridge aesthetics</li>
        </ul>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>What You'll Need</h2>
        <ul className='list-disc list-inside space-y-2 text-neutral-700'>
          <li>React 18+</li>
          <li>Tailwind CSS v4</li>
          <li>TypeScript (recommended)</li>
        </ul>
      </div>
    </div>
  )
}
