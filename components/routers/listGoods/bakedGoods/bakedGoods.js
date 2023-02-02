import express from 'express'
import BakedGoods from '../../../controllers/listGoods/bakedGoods/bakedGoods.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const bakedGoods = express.Router()

bakedGoods.get('/', BakedGoods.getAll)
bakedGoods.post('/', guard, BakedGoods.create)

bakedGoods.get('/:id', guard, isValid, BakedGoods.getById)
bakedGoods.delete('/:id', guard, isValid, BakedGoods.remove)
    .post('/:id', guard, isValid, BakedGoods.update)

export default bakedGoods