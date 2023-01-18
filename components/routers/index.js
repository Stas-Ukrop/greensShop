import express from 'express'
import listOfRouters from './listOfRoutersForOrder/listOfRouters.js'
import ordersForDelivery from './orders/orders.js'
import userRouter from './users/users.js'

const useApi = express.Router()
useApi.use('/list', listOfRouters)
useApi.use('/orders', ordersForDelivery)
useApi.use('/users', userRouter)

export default useApi