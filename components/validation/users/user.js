import Joi from 'joi'

const schemaSignUpUser = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).max(15).required(),
    name: Joi.string().required(),
    role: Joi.string().required(),
})

const schemaSignInUser = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

const schemaSignOutUser = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    token: Joi.string().required(),
})

const schemaGetAllUser = Joi.object({
    token: Joi.string().required(),
    role: Joi.string().required(),
})

const schemaDeleteIdUser = Joi.object({
    token: Joi.string().required(),
    role: Joi.string().required(),
})

const schemaUpdateUser = Joi.object({
    token: Joi.string().required(),
    role: Joi.string().required(),
})

const schemaGetIdUser = Joi.object({
    token: Joi.string().required(),
    role: Joi.string().required(),
    id: Joi.string().required(),
})
const validate = async (schema, obj, next) => {
    try {
        await schema.validateAsync(obj)
        next()
    } catch (err) {
        next({
            status: 400,
            message: err.message.replace(/"/g, ''),
        })
    }
}
export default {
    validationSignUpUser: (req, res, next) => {
        return validate(schemaSignUpUser, req.body, next)
    },

    validateSignInUser: (req, res, next) => {
        return validate(schemaSignInUser, req.body, next)
    },
    validateSignOutUser: (req, res, next) => {
        return validate(schemaSignOutUser, req.body, next)
    },
    validateGetAllUser: (req, res, next) => {
        return validate(schemaGetAllUser, req.body, next)
    },
    validateDeleteIdUser: (req, res, next) => {
        return validate(schemaDeleteIdUser, req.body, next)
    },
    validateUpdateUser: (req, res, next) => {
        return validate(schemaUpdateUser, req.body, next)
    },
    validateGetIdUser: (req, res, next) => {
        return validate(schemaGetIdUser, req.body, next)
    },
}