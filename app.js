
const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const router = express.Router();
const fs = require('fs');



app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    extname:'hbs',
    defaultLayout: 'main',
}));
app.use(express.static('public'));

app.use('/', router);

router.get('/', (req,res) => {
    res.render("index");
});


router.get('/sats', (req,res) => {
    fs.readFile('./sat.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data)
    });
});

app.listen(3000);
console.log('Running at Port 3000');
