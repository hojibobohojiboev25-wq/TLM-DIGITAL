import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create default admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.adminUser.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
    },
  })

  // Create default page content
  await prisma.pageContent.upsert({
    where: { page_section: { page: 'home', section: 'slogan' } },
    update: {},
    create: {
      page: 'home',
      section: 'slogan',
      content: 'Träume. Lernen. Machen.',
    },
  })

  await prisma.pageContent.upsert({
    where: { page_section: { page: 'home', section: 'description' } },
    update: {},
    create: {
      page: 'home',
      section: 'description',
      content: 'We turn your digital dreams into reality with cutting-edge IT solutions.',
    },
  })

  await prisma.pageContent.upsert({
    where: { page_section: { page: 'about', section: 'content' } },
    update: {},
    create: {
      page: 'about',
      section: 'content',
      content: 'TLM Digital is your trusted partner for comprehensive IT services. We specialize in web development, mobile applications, and digital transformation solutions.',
    },
  })

  await prisma.pageContent.upsert({
    where: { page_section: { page: 'contacts', section: 'email' } },
    update: {},
    create: {
      page: 'contacts',
      section: 'email',
      content: 'hello@tlmdigital.com',
    },
  })

  await prisma.pageContent.upsert({
    where: { page_section: { page: 'contacts', section: 'telegram' } },
    update: {},
    create: {
      page: 'contacts',
      section: 'telegram',
      content: '@tlmdigital',
    },
  })

  await prisma.pageContent.upsert({
    where: { page_section: { page: 'contacts', section: 'instagram' } },
    update: {},
    create: {
      page: 'contacts',
      section: 'instagram',
      content: '@tlm_digital',
    },
  })

  // Create sample services
  await prisma.service.upsert({
    where: { id: 'web-dev' },
    update: {},
    create: {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies including Next.js, React, and TypeScript.',
      price: 2500,
    },
  })

  await prisma.service.upsert({
    where: { id: 'mobile-dev' },
    update: {},
    create: {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with excellent user experience.',
      price: 5000,
    },
  })

  await prisma.service.upsert({
    where: { id: 'ecommerce' },
    update: {},
    create: {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description: 'Complete online store setup with payment integration, inventory management, and analytics.',
      price: 3500,
    },
  })

  console.log('Database seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })