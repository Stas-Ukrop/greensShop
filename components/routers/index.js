import express from 'express'
import listOfRouters from './listOfRoutersForOrder/listOfRouters.js'
import orders from './orders/orders.js'
import userRouter from './users/users.js'

const useApi = express.Router()
useApi.use('/list', listOfRouters)
useApi.use('/orders', orders)
useApi.use('/users', userRouter)

