import multer from 'multer'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const upload_dir = path.join(__dirname, "../temp")
export const product_dir = path.join(__dirname, "../product")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, upload_dir)
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now().toString()}-${file.originalname}`)
    },
})

export const upload = multer({
    storage: storage,
    limits: { fileSize: 2000000 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.includes('image')) {
            cb(null, true)
            return
        }
        const error = new Error('Wrong format file for avatar')
        error.status = 400
        cb(error)
    },
})
