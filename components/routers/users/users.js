import express from 'express'
import controllersUser from '../../controllers/users/users.js'
import Validation from '../../validation/users/user.js'
import guard from '../../config/guard.js'

const userRouter = express.Router()

userRouter.post('/login', Validation.validateSignInUser, controllersUser.login)
userRouter.get('/logout', guard, controllersUser.logout)

userRouter.get('/', guard, Validation.validateGetAllUser, controllersUser.getAll)
userRouter.post('/register', Validation.validationSignUpUser, controllersUser.register)

userRouter
    .get('/:id', guard, Validation.validateGetIdUser, controllersUser.getById)
    .delete('/:id', guard, Validation.validateDeleteIdUser, controllersUser.remove)
    .post('/:id', guard, Validation.validateUpdateUser, controllersUser.update)

export default userRouter