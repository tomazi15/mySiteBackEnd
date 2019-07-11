var mailer = require('../controllers/mailerController');
const troll = new mailer();
const cors = require('cors');

// For future when FE deployed
const corsOptions = {
    origin: 'https://yourdomain.com'
  }

const routes = ((app) => {
    app.route('/api/mailer', cors())
        .post((req, res) => {
            troll.mailer(req, res);
        })
});

module.exports = routes;