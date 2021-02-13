import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { rootRouter } from './routes/root.route.js'
import logger from './utils/logger.js'
import { requestLogger } from './middleware/requestLogger.middleware.js'

dotenv.config()

const NAMESPACE = 'APP'

const app = express()

if (process.env.MODE === 'DEV') {
  app.use(cors())
}
app.use(express.json())
app.use(requestLogger)

mongoose.connect(
  process.env.DB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  (err) => {
    if (err) {
      return logger.error(NAMESPACE, 'DB connection error', err)
    }
    logger.info(NAMESPACE, 'DB is connected')
  }
)

app.use(rootRouter)

app.listen(process.env.SERVER_PORT, () => {
  logger.info(NAMESPACE, `Server is listening port ${process.env.SERVER_PORT}`)
})
