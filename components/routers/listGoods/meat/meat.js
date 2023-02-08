import express from 'express'
import meat from '../../../controllers/listGoods/meat/meat.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const meatRout = express.Router()

meatRout.get('/', meat.getAll)
meatRout.post('/', guard, meat.create)

meatRout.get('/:id', guard, isValid, meat.getById)
meatRout.delete('/:id', guard, isValid, meat.remove)
    .post('/:id', guard, isValid, meat.update)

export default meatRout