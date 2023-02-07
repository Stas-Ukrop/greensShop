import express from 'express'
import berryAndFruits from '../../../controllers/listGoods/berryAndFruits/berryAndFruits.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const berryAndFruit = express.Router()

berryAndFruit.get('/', berryAndFruits.getAll)
berryAndFruit.post('/', guard, berryAndFruits.create)

berryAndFruit.get('/:id', guard, isValid, berryAndFruits.getById)
berryAndFruit.delete('/:id', guard, isValid, berryAndFruits.remove)
    .post('/:id', guard, isValid, berryAndFruits.update)

export default berryAndFruit