var mailer = require('../controllers/mailerController');
const troll = new mailer();

const routes = ((app) => {
    app.route('/api/mailer')
        .post((req, res) => {
            troll.mailer(req, res);
        })
});

module.exports = routes;