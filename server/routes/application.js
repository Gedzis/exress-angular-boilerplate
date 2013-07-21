module.exports = function (app) {

    var index = function (req, res) {
        res.render('index');
    };
    app.get('/partials/:name', function (req, res) {
            var name = req.params.name;
            res.render('partials/' + name);
        }
    );

    app.get('/templates/:name', function (req, res) {
            var name = req.params.name;
            res.render('templates/' + name);
        }
    );

    app.get('/', index);

    app.get('*', index);


}