import express from 'express'
import vegetables from '../../../controllers/listGoods/vegetables/vegetables.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const vegetable = express.Router()

vegetable.get('/', vegetables.getAll)
vegetable.post('/', guard, vegetables.create)

vegetable.get('/:id', guard, isValid, vegetables.getById)
vegetable.delete('/:id', guard, isValid, vegetables.remove)
    .post('/:id', guard, isValid, vegetables.update)

export default vegetable