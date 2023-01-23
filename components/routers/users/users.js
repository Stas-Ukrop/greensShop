import express from 'express'
import controllersForUsers from '../../controllers/users/controllersForUsers.js'
import controllersUser from '../../controllers/users/users.js'
import Validation from '../../validation/users/user.js'

const userRouter = express.Router()

userRouter.post('/login', Validation.validateSignInUser, controllersUser.login)
userRouter.post('/logout', Validation.validateSignInUser, controllersUser.logout)

userRouter.get('/', controllersForUsers.getAll)
userRouter.post('/register', Validation.validationSignUpUser, controllersForUsers.create)

userRouter
    .get('/:id', controllersForUsers.getById)
    .delete('/:id', controllersForUsers.remove)
    .post('/:id', controllersForUsers.update)

export default userRouter