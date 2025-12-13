// src/content/card.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function CardDemo() {
  return (
    <div className='space-y-12 py-4'>
      {/* Header */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>Card</h1>
        <p className='text-lg text-neutral-600'>
          A flexible card component with header, content, and footer sections.
        </p>
      </div>

      {/* Basic Card Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Basic Card</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>This is a card description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here. This is the main body of the card.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* With Footer Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>With Footer</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardHeader>
              <CardTitle>Complete Card</CardTitle>
              <CardDescription>Card with all sections</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card includes header, content, and footer sections.</p>
            </CardContent>
            <CardFooter>
              <Button size='sm'>Action</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Multiple Cards Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Multiple Cards</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
              <CardDescription>First feature description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about the first feature.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
              <CardDescription>Second feature description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about the second feature.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
              <CardDescription>Third feature description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about the third feature.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Section */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <pre className='bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto'>
          <code>{`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>`}</code>
        </pre>
      </div>
    </div>
  )
}
