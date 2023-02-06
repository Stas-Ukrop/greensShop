import express from 'express'
import driedFruits from '../../../controllers/listGoods/driedFruits/driedFruits.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const driedFruit = express.Router()

driedFruit.get('/', driedFruits.getAll)
driedFruit.post('/', guard, driedFruits.create)

driedFruit.get('/:id', guard, isValid, driedFruits.getById)
driedFruit.delete('/:id', guard, isValid, driedFruits.remove)
    .post('/:id', guard, isValid, driedFruits.update)

export default driedFruit