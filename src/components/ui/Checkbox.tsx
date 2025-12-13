import { cn } from '@/lib/utils'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Checkbox({
  className,
  label,
  ...props
}: CheckboxProps) {
  const id = label ? label.toLowerCase().replace(/\s+/g, '-') : props.id

  return (
    <div className='flex items-center gap-2'>
      <input
        type='checkbox'
        id={id}
        className={cn(
          'w-4 h-4 text-primary-500 bg-white border-neutral-300 rounded focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className='text-sm font-medium cursor-pointer select-none'>
          {label}
        </label>
      )}
    </div>
  )
}
