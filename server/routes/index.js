var application = require('./application'), api = require("./api");

module.exports = function (app) {
    api(app);

    //This needs to be last one, because we do not override other routes
    application(app);
}