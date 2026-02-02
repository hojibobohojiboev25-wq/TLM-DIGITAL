import { defineConfig } from 'prisma/config'

export default defineConfig({
  database: {
    adapter: 'libsql',
    url: 'file:./dev.db'
  }
})