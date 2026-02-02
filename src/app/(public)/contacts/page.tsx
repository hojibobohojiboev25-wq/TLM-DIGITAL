import { prisma } from '@/lib/db'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageCircle, Instagram } from 'lucide-react'

async function getContactsContent() {
  try {
    const [email, telegram, instagram] = await Promise.all([
      prisma.pageContent.findUnique({
        where: { page_section: { page: 'contacts', section: 'email' } }
      }),
      prisma.pageContent.findUnique({
        where: { page_section: { page: 'contacts', section: 'telegram' } }
      }),
      prisma.pageContent.findUnique({
        where: { page_section: { page: 'contacts', section: 'instagram' } }
      }),
    ])

    return {
      email: email?.content || 'contact@tlmdigital.com',
      telegram: telegram?.content || '@tlmdigital',
      instagram: instagram?.content || '@tlm_digital',
    }
  } catch (error) {
    console.error('Failed to fetch contacts content:', error)
    return {
      email: 'contact@tlmdigital.com',
      telegram: '@tlmdigital',
      instagram: '@tlm_digital',
    }
  }
}

export default async function ContactsPage() {
  const contacts = await getContactsContent()

  const contactMethods = [
    {
      title: 'Email',
      description: 'Send us an email for detailed inquiries',
      value: contacts.email,
      icon: Mail,
      href: `mailto:${contacts.email}`,
    },
    {
      title: 'Telegram',
      description: 'Quick chat and instant responses',
      value: contacts.telegram,
      icon: MessageCircle,
      href: `https://t.me/${contacts.telegram.replace('@', '')}`,
    },
    {
      title: 'Instagram',
      description: 'Follow us for updates and inspiration',
      value: contacts.instagram,
      icon: Instagram,
      href: `https://instagram.com/${contacts.instagram.replace('@', '')}`,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with us through your preferred channel.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {contactMethods.map((method) => {
          const Icon = method.icon
          return (
            <Card key={method.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-primary hover:underline font-medium"
                >
                  {method.value}
                </a>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="text-center space-y-4 py-8 bg-muted/50 rounded-lg">
        <h2 className="text-2xl font-semibold">Ready to start your project?</h2>
        <p className="text-muted-foreground">
          Use our order form to tell us about your vision, or reach out directly using any of the methods above.
        </p>
      </div>
    </div>
  )
}