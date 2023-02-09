import express from 'express'
import controllersUser from '../../controllers/users/users.js'
import Validation from '../../validation/users/user.js'
import guard from '../../config/guard.js'
import { isValid } from '../../config/isValidId.js'
import { isAdmin } from '../../config/isAdmin.js'
import { upload } from '../../config/upload.js'
import { upload_dir, product_dir } from '../../config/upload.js'
import path from 'path'
import fs from 'fs/promises'
const userRouter = express.Router()

userRouter.post('/register', upload.single('image'), async (req, res) => {
    const { path: tempUpload, originalname } = req.file
    console.log(tempUpload)
    const resultUpload = path.join(product_dir, originalname)
    console.log(resultUpload)
    try {
        await fs.rename(tempUpload, resultUpload)
    } catch (error) {
        await fs.unlink(tempUpload)
    }

}, Validation.validationSignUpUser, controllersUser.register)
userRouter.post('/login', Validation.validateSignInUser, controllersUser.login)
userRouter.get('/logout', guard, controllersUser.logout)

userRouter.get('/getAll', guard, isAdmin, controllersUser.getAll)
userRouter
    .get('/:id', guard, isValid, isAdmin, controllersUser.getById)
    .delete('/:id', guard, isValid, isAdmin, controllersUser.remove)
    .put('/:id', guard, isValid, isAdmin, controllersUser.update)

export default userRouter