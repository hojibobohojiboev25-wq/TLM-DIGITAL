import { prisma } from '@/lib/db'
import { ServiceCard } from '@/components/service-card'

async function getServices() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: 'asc' }
    })
    return services
  } catch (error) {
    console.error('Failed to fetch services:', error)
    return []
  }
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Professional IT solutions tailored to bring your vision to life.
          From concept to deployment, we've got you covered.
        </p>
      </div>

      {services.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No services available at the moment.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}