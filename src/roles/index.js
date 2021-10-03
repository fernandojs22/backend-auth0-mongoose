const User = require('../models/User')

const ROLES = {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER'
}

const ROUTES_PERMISSION = {
    employees: ['ROLE_ADMIN']
}

function verifyRole(route) {
    return (req, res, next) => {
        try {

            User.findOne({ _id: req.user._id }, async (err, user) => {

                const role = user.authorities.filter(role => ROUTES_PERMISSION[`${route}`.replace('/','')].includes(role));

                if (err) throw err
                if (!user) res.json({ message: `User Don't Exists` })

                if (role.length === 0) res.status(401).json({ message: 'Not allowed'})
                next()

            })
        } catch (err) {
            res.json({ error: err })
        }
    }  
}

module.exports = { ROLES, ROUTES_PERMISSION, verifyRole }