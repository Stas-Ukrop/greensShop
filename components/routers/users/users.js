import express from 'express'
import controllersUser from '../../controllers/users/users.js'
import Validation from '../../validation/users/user.js'
import guard from '../../config/guard.js'
import { isValid } from '../../config/isValidId.js'
import { isAdmin } from '../../config/isAdmin.js'
const userRouter = express.Router()

userRouter.post('/register', Validation.validationSignUpUser, controllersUser.register)
userRouter.post('/login', Validation.validateSignInUser, controllersUser.login)
userRouter.get('/logout', guard, controllersUser.logout)

userRouter.get('/getAll', guard, isAdmin, controllersUser.getAll)
userRouter
    .get('/:id', guard, isValid, isAdmin, controllersUser.getById)
    .delete('/:id', guard, isValid, isAdmin, controllersUser.remove)
    .put('/:id', guard, isValid, isAdmin, controllersUser.update)

export default userRouter