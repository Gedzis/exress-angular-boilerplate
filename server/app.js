/**
 * Module dependencies
 */

var express = require('express'),
    http = require('http'),
    browserify = require('browserify-middleware'),
    path = require('path');

var app = module.exports = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('victoria secret m'));
    app.use(express.session({
        secret: 'victoria secret m'
    }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/js/app.js', browserify('../client/client-main.js'));
    app.use(app.router);

});

require("./routes")(app)


app.listen(3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, "PP");
});