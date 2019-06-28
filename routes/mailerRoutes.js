var mailer = require('../controllers/mailerController');
const troll = new mailer();

const routes = ((app) => {
    app.route('/api/mailer')
        .post((req, res) => {
            console.log('IWAS HERE');
            troll.mailer(req);
        })
});

module.exports = routes;