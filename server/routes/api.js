module.exports = function (app) {
    app.get('/api/name', function (req, res) {
        res.json({
            name: 'Bob'
        });
    });

}