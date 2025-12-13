import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'accent'
}

const badgeVariants = cva(
  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-neutral-100 text-neutral-700',
        primary: 'bg-primary-100 text-primary-700',
        success: 'bg-success-100 text-success-700',
        error: 'bg-error-100 text-error-700',
        warning: 'bg-warning-100 text-warning-700',
        accent: 'bg-accent-100 text-accent-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export default function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
