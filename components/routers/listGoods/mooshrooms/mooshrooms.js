import express from 'express'
import mooshrooms from '../../../controllers/listGoods/mooshrooms/mooshrooms.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const mooshroom = express.Router()

mooshroom.get('/', mooshrooms.getAll)
mooshroom.post('/', guard, mooshrooms.create)

mooshroom.get('/:id', guard, isValid, mooshrooms.getById)
mooshroom.delete('/:id', guard, isValid, mooshrooms.remove)
    .post('/:id', guard, isValid, mooshrooms.update)

export default mooshroom