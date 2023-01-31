import passport from 'passport'
import './passport.js'
import num from '../helpers/number.js'



const guard = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        const headerAuth = req.get('Authorization')
        let token = null
        if (headerAuth) {
            token = headerAuth.split(' ')[1]
        }
        if (err || !user || token != user?.token) {
            return res.status(num.HttpCode.UNAUTHORIZED).json({ status: 'Error', code: num.HttpCode.UNAUTHORIZED, message: 'Invalid credentials' })
        }
        req.user = user
        next()
    })(req, res, next)
}

export default guard