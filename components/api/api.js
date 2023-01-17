import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import router from '../routers/index.js'
import { StatusOfAns } from '../helpers/number.js'
const api = express()

api.use(helmet())
api.use(cors())
api.use(express.json())
api.use('/api', router)

api.use((req, res) => {
    res.status(StatusOfAns.ANSWER_404).json({ status: 'error', code: StatusOfAns.ANSWER_404, message: 'Not found' })
})

api.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({
        status: status === 500 ? 'fail' : 'error',
        code: status,
        message: err.message
    })
})
export default api
