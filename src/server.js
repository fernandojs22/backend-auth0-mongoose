require('dotenv').config()
const routes = require('./routes/index')

const PORT = process.env.PORT_AUTHENTICATION

module.exports = Server = (app) => {
    
    app.use(routes)

    return app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}