import express from 'express'
import Controllers from '../../controllers/orders/controllersForOrders.js'
import guard from '../../config/guard.js'
import { isValid } from '../../config/isValidId.js'

const orders = express.Router()

orders.get('/', Controllers.getAll)
orders.post('/', guard, Controllers.create)

orders.get('/:id', guard, isValid, Controllers.getById)
orders.delete('/:id', guard, isValid, Controllers.remove)
    .post('/:id', guard, isValid, Controllers.update)

export default orders