import api from '../components/api/api.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000

api.listen(PORT, () => {
    console.log(`${PORT}`)
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               