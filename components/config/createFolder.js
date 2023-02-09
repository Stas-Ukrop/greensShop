import fs from 'fs/promises'

const isAccessible = (path) => {
    return fs
        .access(path)
        .then(() => true)
        .catch(() => false)
}

export const createFolderIsNotExist = async (folder) => {
    if (!(await isAccessible(folder))) {
        await fs.mkdir(folder)
    }
}