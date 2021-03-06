module.exports = middlewares = (app) => {
    require('./express/ExpressMiddleWare')(app)
    require('./cors/CorsMiddleWare')(app)
    require('./session/ExpressSessionMiddleWare')(app)
}