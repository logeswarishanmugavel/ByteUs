module.exports = {

    getHome: function(req, res, next) {
        res.render('index', { title: 'ByteUs' });
    }
};