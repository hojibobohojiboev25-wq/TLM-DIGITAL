import { Service } from '@/types'
import { formatPrice } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-2xl font-bold text-primary">
          {formatPrice(service.price)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </CardContent>
    </Card>
  )
}