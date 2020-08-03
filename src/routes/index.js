module.exports = function (app) {
    app.use('/api/v1', require('./unauth.routes'));
    app.use('/api/v1/user', require('./user.routes'));
    app.use('/api/v1/department', require('./department.routes'));
    app.use('/api/v1/program', require('./program.routes'));

    // app.use('/api/v1/admin', require('./routes.auth'));
    // app.use('/api/v1', [AuthStore.authenticate], require('./routes.auth'));
    // app.use('/api/v1/admin', [AuthStore.authenticate, AuthStore.isAdmin], require('./routes.admin'));
}