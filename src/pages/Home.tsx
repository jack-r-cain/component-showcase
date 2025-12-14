import { Link } from 'react-router'
import Section from '@/components/layout/Section'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/Card'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className='py-20 md:py-32'>
        <Container className='text-center max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Work In Progress, Not Ready for Production
          </h1>
          <p className='text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed'>
            A collection of beautifully designed, accessible React components
            built with Tailwind CSS. Copy the code, customize it, and make it
            yours.
          </p>
          <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <Link to='/docs/getting-started'>
              <Button size='lg'>Get Started</Button>
            </Link>
            <Link to='/docs/components/button'>
              <Button variant='outline' size='lg'>
                Browse Components
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className='bg-neutral-50'>
        <Container>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Why Cain UI?
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Card>
              <CardHeader>
                <CardTitle>Own Your Code</CardTitle>
                <CardDescription>No black boxes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-neutral-700'>
                  Copy components directly into your project. Full control, no
                  abstractions, no hidden magic. The code is yours to modify
                  however you need.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Built with Tailwind</CardTitle>
                <CardDescription>Modern styling approach</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-neutral-700'>
                  Leverage Tailwind CSS with full TypeScript support.
                  Customizable variants using class-variance-authority for
                  predictable, type-safe styling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessible by Default</CardTitle>
                <CardDescription>Built for everyone</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-neutral-700'>
                  Components follow WAI-ARIA guidelines with proper keyboard
                  navigation, focus management, and screen reader support out of
                  the box.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container className='text-center max-w-2xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to Build?
          </h2>
          <p className='text-lg text-neutral-600 mb-8'>
            Start using Cain UI in your next project. Installation takes less
            than 5 minutes.
          </p>
          <Link to='/docs/getting-started'>
            <Button size='lg'>Get Started</Button>
          </Link>
        </Container>
      </Section>
    </>
  )
}
