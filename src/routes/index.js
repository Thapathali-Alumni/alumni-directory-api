module.exports = function (app) {
    app.use('/api/v1', require('./unauth.routes'));
    app.use('/api/v1/user', require('./user.routes'));
    app.use('/api/v1/department', require('./department.routes'));
    app.use('/api/v1/program', require('./program.routes'));
    app.use('/api/v1/batch', require('./batch.routes'));

}