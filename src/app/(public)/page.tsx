import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Träume. Lernen. Machen.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We turn your digital dreams into reality with cutting-edge IT solutions.
          From web development to mobile apps, we make it happen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/order">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <Link href="/services">
              View Services
            </Link>
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-muted-foreground">
              Modern, responsive websites built with Next.js, React, and TypeScript.
              SEO-optimized and lightning fast.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Mobile Apps</h3>
            <p className="text-muted-foreground">
              Native and cross-platform mobile applications for iOS and Android
              with exceptional user experience.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11h8l.64 10.124A2 2 0 0018.638 23H5.362a2 2 0 001.998-1.876L8 11z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">E-commerce</h3>
            <p className="text-muted-foreground">
              Complete online store solutions with payment integration,
              inventory management, and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold">Ready to Bring Your Ideas to Life?</h2>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          Let's discuss your project and create something amazing together.
        </p>
        <Button asChild size="lg" className="text-lg px-8">
          <Link href="/order">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
