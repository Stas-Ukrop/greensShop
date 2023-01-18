import express from 'express'
import Controllers from '../../controllers/users/controllersForUsers.js'
const userRouter = express.Router()

userRouter.get('/', Controllers.getAll)
userRouter.post('/', Controllers.create)

userRouter.get('/:id', Controllers.getById)
userRouter.delete('/:id', Controllers.remove).post('/:id', Controllers.update)

export default userRouter