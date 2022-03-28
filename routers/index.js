
const profilesRouter = require('./profiles');



function route(app){

    app.use('/profiles', profilesRouter);

};

module.exports = route;