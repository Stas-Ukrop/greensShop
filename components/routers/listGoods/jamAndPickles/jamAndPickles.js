import express from 'express'
import jamAndPickles from '../../../controllers/listGoods/jamAndPickles/jamAndPickles.js'
import guard from '../../../config/guard.js'
import { isValid } from '../../../config/isValidId.js'

const jamAndPickle = express.Router()

jamAndPickle.get('/', jamAndPickles.getAll)
jamAndPickle.post('/', guard, jamAndPickles.create)

jamAndPickle.get('/:id', guard, isValid, jamAndPickles.getById)
jamAndPickle.delete('/:id', guard, isValid, jamAndPickles.remove)
    .post('/:id', guard, isValid, jamAndPickles.update)

export default jamAndPickle