import express from 'express'
import drinks from '../../../controllers/listGoods/drinks/drinks.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const drink = express.Router()

drink.get('/', drinks.getAll)
drink.post('/', guard, drinks.create)

drink.get('/:id', guard, isValid, drinks.getById)
drink.delete('/:id', guard, isValid, drinks.remove)
    .post('/:id', guard, isValid, drinks.update)

export default drink