import express from 'express'
import fish from '../../../controllers/listGoods/fish/fish.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const fishRout = express.Router()

fishRout.get('/', fish.getAll)
fishRout.post('/', guard, fish.create)

fishRout.get('/:id', guard, isValid, fish.getById)
fishRout.delete('/:id', guard, isValid, fish.remove)
    .post('/:id', guard, isValid, fish.update)

export default fishRout