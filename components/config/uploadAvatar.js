import { v2 as cloudinary } from 'cloudinary'
import { promisify } from 'util'
import dotenv from 'dotenv/config'
import { resolve } from 'path'
import { rejects } from 'assert'

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
})

const uploadCloud = (pathFile) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            pathFile,
            {
                folder: "Avatars",
                transformation: {
                    width: 250,
                    height: 250,
                    crop: 'fill',
                },
            },
            (error, result) => {
                // console.log(result)
                // console.log(error)
                if (error) reject(error)
                if (result) resolve(result)
            }
        )
    })
}

// const uploadCloud = promisify(cloudinary.uploader.upload)
export { uploadCloud }

// // const uploadCloud = promisify(cloudinary.uploader.upload)
// export class UploadService {
//     async saveAvatar(pathFile, oldIdCloudAvatar) {
//         const {
//             public_id: idCloudAvatar,
//             secure_url: avatarURL,
//         } = await uploadCloud(pathFile, {
//             public_id: oldIdCloudAvatar?.replace('avatarCloud/', ''),
//             folder: 'avatarCloud',
//             transformation: { width: 250, height: 250, crop: 'pad' },
//         })
//         return { idCloudAvatar, avatarURL }
//     }
// }