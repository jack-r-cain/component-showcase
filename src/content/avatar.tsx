// src/content/avatar.tsx
import Avatar from '@/components/ui/Avatar'

export default function AvatarDemo() {
  return (
    <div className='space-y-12 py-4'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Avatar</h1>
        <p className='text-lg text-neutral-600'>
          A profile avatar component with image support and fallback text.
        </p>
      </div>

      {/* Sizes Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Sizes</h2>
        <div className='flex flex-wrap items-center gap-4'>
          <Avatar size='sm' fallback='S' />
          <Avatar size='md' fallback='M' />
          <Avatar size='lg' fallback='L' />
          <Avatar size='xl' fallback='XL' />
        </div>
      </div>

      {/* With Fallback Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>With Fallback Text</h2>
        <div className='flex flex-wrap items-center gap-4'>
          <Avatar fallback='JD' alt='John Doe' />
          <Avatar fallback='AS' alt='Alice Smith' />
          <Avatar fallback='BJ' alt='Bob Johnson' />
          <Avatar fallback='EW' alt='Emma Wilson' />
        </div>
      </div>

      {/* With Images Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>With Images</h2>
        <p className='text-neutral-700'>
          When an image source is provided, it displays the image. Falls back to text if the image fails to load.
        </p>
        <div className='flex flex-wrap items-center gap-4'>
          <Avatar
            src='https://i.pravatar.cc/150?img=1'
            alt='User 1'
            fallback='U1'
          />
          <Avatar
            src='https://i.pravatar.cc/150?img=2'
            alt='User 2'
            fallback='U2'
          />
          <Avatar
            src='https://i.pravatar.cc/150?img=3'
            alt='User 3'
            fallback='U3'
          />
          <Avatar
            src='https://i.pravatar.cc/150?img=4'
            alt='User 4'
            fallback='U4'
          />
        </div>
      </div>

      {/* Different Sizes with Images Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Different Sizes</h2>
        <div className='flex flex-wrap items-center gap-4'>
          <Avatar
            size='sm'
            src='https://i.pravatar.cc/150?img=5'
            alt='Small'
            fallback='S'
          />
          <Avatar
            size='md'
            src='https://i.pravatar.cc/150?img=6'
            alt='Medium'
            fallback='M'
          />
          <Avatar
            size='lg'
            src='https://i.pravatar.cc/150?img=7'
            alt='Large'
            fallback='L'
          />
          <Avatar
            size='xl'
            src='https://i.pravatar.cc/150?img=8'
            alt='Extra Large'
            fallback='XL'
          />
        </div>
      </div>

      {/* Customizable Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Customizable</h2>
        <p className='text-neutral-700'>
          Avatars can be customized with additional className props for styling.
        </p>
        <div className='flex flex-wrap items-center gap-4'>
          <Avatar fallback='A' />
          <Avatar fallback='B' className='bg-primary-200 text-primary-700' />
          <Avatar fallback='C' className='bg-accent-200 text-accent-700' />
          <Avatar fallback='D' className='bg-success-200 text-success-700' />
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import Avatar from '@/components/ui/Avatar'

<Avatar size="md" fallback="JD" alt="John Doe" />
<Avatar
  src="https://example.com/avatar.jpg"
  alt="User"
  fallback="U"
/>
<Avatar size="lg" fallback="AS" />`}</code>
        </pre>
      </div>
    </div>
  )
}
