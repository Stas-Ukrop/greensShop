import express from 'express'
import milks from '../../../controllers/listGoods/milks/milks.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const milk = express.Router()

milk.get('/', milks.getAll)
milk.post('/', guard, milks.create)

milk.get('/:id', guard, isValid, milks.getById)
milk.delete('/:id', guard, isValid, milks.remove)
    .post('/:id', guard, isValid, milks.update)

export default milk