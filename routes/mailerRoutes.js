var mailer = require('../controllers/mailerController');
const troll = new mailer();

const routes = ((app) => {
    app.route('/api/mailer')
        .post((req, res) => {
            console.log('troll', req);
            
            troll.mailer(req)
            res.json({message: 'ok'});
            res.sendStatus(200);
        })
});

module.exports = routes;