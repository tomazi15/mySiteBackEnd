var express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const bodyParser = require('body-parser');
let mailerRoutes = require('./routes/mailerRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mailerRoutes(app);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log(`Server is runnig on PORT ${PORT}`);
});
