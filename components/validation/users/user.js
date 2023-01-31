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
}