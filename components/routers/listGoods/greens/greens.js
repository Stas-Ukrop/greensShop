import express from 'express'
import greens from '../../../controllers/listGoods/greens/greens.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const green = express.Router()

green.get('/', greens.getAll)
green.post('/', guard, greens.create)

green.get('/:id', guard, isValid, greens.getById)
green.delete('/:id', guard, isValid, greens.remove)
    .post('/:id', guard, isValid, greens.update)

export default green