import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { uploadImageRoute } from './routes/upload-image'
import { fastifyMultipart } from '@fastify/multipart'

export const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(fastifyMultipart)
app.register(uploadImageRoute)

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running!')
})