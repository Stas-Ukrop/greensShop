import express from 'express'
import nuts from '../../../controllers/listGoods/nuts/nuts.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const nut = express.Router()

nut.get('/', nuts.getAll)
nut.post('/', guard, nuts.create)

nut.get('/:id', guard, isValid, nuts.getById)
nut.delete('/:id', guard, isValid, nuts.remove)
    .post('/:id', guard, isValid, nuts.update)

export default nut