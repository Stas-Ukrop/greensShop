import express from 'express'
import sweets from '../../../controllers/listGoods/sweets/sweets.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const sweet = express.Router()

sweet.get('/', sweets.getAll)
sweet.post('/', guard, sweets.create)

sweet.get('/:id', guard, isValid, sweets.getById)
sweet.delete('/:id', guard, isValid, sweets.remove)
    .post('/:id', guard, isValid, sweets.update)

export default sweet