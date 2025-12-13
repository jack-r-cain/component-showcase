// src/pages/component-demo.tsx
import { useParams } from 'react-router'

// Import all demo content
import ButtonDemo from '@/content/button'
import InputDemo from '@/content/input'
import TextareaDemo from '@/content/textarea'
import SelectDemo from '@/content/select'
import CheckboxDemo from '@/content/checkbox'
import RadioDemo from '@/content/radio'
import CardDemo from '@/content/card'
import BadgeDemo from '@/content/badge'
import AvatarDemo from '@/content/avatar'
import DialogDemo from '@/content/dialog'
import ShellDemo from '@/content/shell'
import ContainerDemo from '@/content/container'
import SectionDemo from '@/content/section'

const demoContent = {
  button: ButtonDemo,
  input: InputDemo,
  textarea: TextareaDemo,
  select: SelectDemo,
  checkbox: CheckboxDemo,
  radio: RadioDemo,
  card: CardDemo,
  badge: BadgeDemo,
  avatar: AvatarDemo,
  dialog: DialogDemo,
  shell: ShellDemo,
  container: ContainerDemo,
  section: SectionDemo,
}

export default function ComponentDemo() {
  const { component } = useParams()
  const DemoContent = demoContent[component as keyof typeof demoContent]

  if (!DemoContent) {
    return (
      <div className='text-center py-12'>
        <h1 className='text-3xl font-bold mb-4'>Component not found</h1>
        <p className='text-neutral-600'>
          The component "{component}" doesn't exist in the documentation.
        </p>
      </div>
    )
  }

  return <DemoContent />
}
