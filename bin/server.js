import api from '../components/api/api.js'
import myDB from '../components/db/db.js'
import { createFolderIsNotExist } from '../components/config/createFolder.js'
import { upload_dir, product_dir } from '../components/config/upload.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000

myDB.then(() => {
    api.listen(PORT, async (req, res) => {
        await createFolderIsNotExist(upload_dir)
        await createFolderIsNotExist(product_dir)
        console.log(PORT)
    })
}).catch(err => {
    console.log(err.message)
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              