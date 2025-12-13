import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { useState } from 'react'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const avatarVariants = cva(
  'inline-flex items-center justify-center rounded-full bg-neutral-200 text-neutral-600 font-medium overflow-hidden',
  {
    variants: {
      size: {
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base',
        xl: 'w-16 h-16 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export default function Avatar({
  className,
  src,
  alt = '',
  fallback,
  size,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = useState(false)

  const showFallback = !src || imageError

  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      {showFallback ? (
        <span>{fallback || alt?.charAt(0).toUpperCase() || '?'}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          className='w-full h-full object-cover'
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}
