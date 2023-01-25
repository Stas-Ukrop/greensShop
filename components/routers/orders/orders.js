import express from 'express'
import Controllers from '../../controllers/orders/controllersForOrders.js'
import guard from '../../config/guard.js'
const orders = express.Router()

orders.get('/', Controllers.getAll)
orders.post('/', guard, Controllers.create)

orders.get('/:id', guard, Controllers.getById)
orders.delete('/:id', guard, Controllers.remove).post('/:id', guard, Controllers.update)

export default orders