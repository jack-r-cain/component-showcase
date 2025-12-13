import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'default' | 'error'
  label?: string
  options: { value: string; label: string }[]
}

const selectVariants = cva(
  'w-full px-3 py-2 border rounded-md text-base transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed bg-white cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
        error: 'border-error-500 focus:border-error-500 focus:ring-error-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export default function Select({
  className,
  variant,
  label,
  options,
  ...props
}: SelectProps) {
  const id = label ? label.toLowerCase().replace(/\s+/g, '-') : undefined

  return (
    <div className='flex flex-col'>
      {label && (
        <label htmlFor={id} className='text-sm font-medium mb-1'>
          {label}
        </label>
      )}
      <select
        id={id}
        className={cn(selectVariants({ variant }), className)}
        {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
