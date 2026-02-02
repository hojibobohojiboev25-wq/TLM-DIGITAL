# TLM Digital - Web Application

A production-ready web application for TLM Digital (Träume. Lernen. Machen.) featuring a public website and admin panel.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **PWA Ready**: Installable as an app on Android/iOS with service worker
- **Dark/Light Mode**: Theme switching with persistence
- **Admin Panel**: Full content management system with authentication
- **Order System**: Contact forms with Telegram bot integration
- **SEO Optimized**: Fast loading with proper meta tags
- **Database**: SQLite with Prisma ORM

## 📱 Pages

### Public Website
- **Home**: Company slogan, services overview, call-to-action
- **Services**: Dynamic service listings with pricing
- **Order**: Contact form with validation and Telegram notifications
- **About**: Editable company information
- **Contacts**: Social media links and contact information

### Admin Panel (`/admin`)
- **Dashboard**: Overview and statistics
- **Services**: CRUD operations for services
- **Content**: Edit page content (About, Contacts, Home)
- **Settings**: Admin user management

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite + Prisma ORM
- **Authentication**: JWT tokens
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tlm-digital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your values:
   ```env
   # Database (SQLite - no additional setup needed)
   # Authentication
   JWT_SECRET=your-super-secret-jwt-key-here

   # Telegram Bot Configuration
   TELEGRAM_BOT_TOKEN=your-telegram-bot-token-here
   TELEGRAM_CHAT_ID=your-telegram-chat-id-here

   # Next.js Configuration
   NEXTAUTH_SECRET=your-nextauth-secret-here
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate

   # Push database schema
   npm run db:push

   # Seed with initial data
   npm run db:seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Telegram Bot Setup

1. Message [@BotFather](https://t.me/botfather) on Telegram
2. Create a new bot with `/newbot`
3. Copy the bot token to `TELEGRAM_BOT_TOKEN`
4. Start a chat with your bot and send a message
5. Get your chat ID by calling the Telegram API:
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
6. Copy the chat ID to `TELEGRAM_CHAT_ID`

### Admin Access

Default admin credentials:
- **Username**: `admin`
- **Password**: `admin123`

**Important**: Change the default password after first login!

## 🚀 Deployment

### Vercel Deployment

1. **Connect your repository to Vercel**
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

2. **Configure environment variables**
   - Add all variables from `.env.local` in Vercel dashboard
   - Make sure `NEXTAUTH_URL` points to your production domain

3. **Deploy**
   - Vercel will automatically build and deploy
   - Your site will be live at the generated URL

### Manual Deployment

For other platforms, ensure:

1. **Build command**: `npm run build`
2. **Install command**: `npm install`
3. **Environment variables** are set
4. **Database** is accessible (SQLite file included in deployment)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── (public)/          # Public pages (home, services, etc.)
│   ├── admin/             # Admin panel pages
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   └── ...               # Feature components
├── lib/                  # Utilities and configurations
│   ├── db.ts             # Database connection
│   └── utils.ts          # Helper functions
├── types/                # TypeScript type definitions
└── hooks/                # Custom React hooks

prisma/
├── schema.prisma         # Database schema
└── seed.ts              # Database seeding

public/                   # Static assets
├── manifest.json         # PWA manifest
└── sw.js                # Service worker
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:seed` - Seed database with initial data
- `npm run db:studio` - Open Prisma Studio
- `npm run db:migrate` - Create and run migrations

## 🔒 Security

- **Admin routes** protected with JWT authentication
- **Input validation** on all forms using Zod
- **SQL injection protection** via Prisma ORM
- **XSS protection** with proper sanitization
- **Rate limiting** on order form submissions
- **HTTP-only cookies** for admin sessions

## 🌐 PWA Features

- **Installable**: Add to home screen on mobile devices
- **Offline support**: Service worker caches static assets
- **Fast loading**: Optimized assets and code splitting
- **Native feel**: Responsive design and smooth animations

## 📊 Database Schema

- **services**: Service offerings with pricing
- **page_content**: Editable content for pages
- **admin_users**: Admin user accounts
- **orders**: Customer inquiries and project requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is private and proprietary to TLM Digital.

## 📞 Support

For technical support or questions:
- Email: hello@tlmdigital.com
- Telegram: @tlmdigital

---

**Built with ❤️ for TLM Digital**