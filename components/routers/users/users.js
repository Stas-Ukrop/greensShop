import express from 'express'
import controllersUser from '../../controllers/users/users.js'
import Validation from '../../validation/users/user.js'

const userRouter = express.Router()

userRouter.post('/login', Validation.validateSignInUser, controllersUser.login)
userRouter.post('/logout', Validation.validateSignOutUser, controllersUser.logout)

userRouter.get('/', Validation.validateGetAllUser, controllersUser.getAll)
userRouter.post('/register', Validation.validationSignUpUser, controllersUser.register)

userRouter
    .get('/:id', Validation.validateGetIdUser, controllersUser.getById)
    .delete('/:id', Validation.validateDeleteIdUser, controllersUser.remove)
    .post('/:id', Validation.validateUpdateUser, controllersUser.update)

export default userRouter