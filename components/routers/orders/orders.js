import express from 'express'
import Controllers from '../../controllers/orders/controllersForOrders.js'
const orders = express.Router()

orders.get('/', Controllers.getAll)
orders.post('/', Controllers.createOrders)

orders.get('/:id', Controllers.getById)
orders.delete('/:id', Controllers.remove).post('/:id', Controllers.updateOrders)

export default orders