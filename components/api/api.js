import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import router from '../routers/routers.js'
const api = express()

api.use(helmet())
api.use(cors())
api.use(express.json())
api.use('/api', router)

export default api
