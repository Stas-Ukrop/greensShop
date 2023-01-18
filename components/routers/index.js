import express from 'express'
import listOfRouters from './listOfRoutersForOrder/listOfRouters.js'
import orders from './orders/orders.js'

const useApi = express.Router()
useApi.use('/list', listOfRouters)
useApi.use('/orders', orders)
useApi.use('/users', (req, res, next) => {
    next()
})

export default useApi