import api from '../components/api/api.js'
import myDB from '../components/db/db.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000

myDB.then(() => {
    api.listen(PORT, (req, res) => {
        console.log(PORT)
    })
}).catch(err => {
    next(err)
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              