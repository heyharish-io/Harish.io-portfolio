import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables (.env) so serverless functions can access GMAIL_USER, etc.
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      {
        name: 'local-api-contact-handler',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res, next) => {
            if (req.method !== 'POST') {
              return next()
            }

            let rawBody = ''
            req.on('data', (chunk) => {
              rawBody += chunk
            })

            req.on('end', async () => {
              try {
                req.body = rawBody ? JSON.parse(rawBody) : {}
              } catch {
                req.body = {}
              }

              res.status = function (code) {
                this.statusCode = code
                return this
              }
              res.json = function (data) {
                this.setHeader('Content-Type', 'application/json')
                this.end(JSON.stringify(data))
                return this
              }

              try {
                const { default: handler } = await import('./api/contact.js')
                await handler(req, res)
              } catch (err) {
                console.error('[API Error]:', err)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: false, message: err.message }))
              }
            })
          })
        },
      },
    ],
  }
})
