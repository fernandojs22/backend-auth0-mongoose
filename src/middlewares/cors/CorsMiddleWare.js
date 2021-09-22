const cors = require('cors')

module.exports = expressMiddleWare = (app) => {
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }))
    return app
}