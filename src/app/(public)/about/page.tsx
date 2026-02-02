import { prisma } from '@/lib/db'

async function getAboutContent() {
  try {
    const content = await prisma.pageContent.findUnique({
      where: { page_section: { page: 'about', section: 'content' } }
    })
    return content?.content || 'Content not available.'
  } catch (error) {
    console.error('Failed to fetch about content:', error)
    return 'Content not available.'
  }
}

export default async function AboutPage() {
  const content = await getAboutContent()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-xl text-muted-foreground">
          Learn more about our mission and values.
        </p>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <div className="whitespace-pre-wrap leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  )
}