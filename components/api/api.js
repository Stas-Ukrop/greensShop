import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import logger from 'morgan'
import routers from '../routers/index.js'
import arr from '../helpers/number.js'
const api = express()

const formatsLogger = api.get('env') === 'development' ? 'dev' : 'short'

api.use(logger(formatsLogger))
api.use(helmet())
api.use(cors())
api.use(express.json())
api.use('/api', routers)

api.use((req, res) => {
    res.status(arr.HttpCode.NOT_FOUND).json({ status: 'error', code: arr.HttpCode.NOT_FOUND, message: 'Not found' })
})

api.use((err, req, res, next) => {
    const status = err.status || arr.HttpCode.INTERNAL_SERVER_ERROR
    res.status(status).json({
        status: status === arr.HttpCode.INTERNAL_SERVER_ERROR ? 'fail' : 'error',
        code: status,
        message: err.message
    })
})
export default api
