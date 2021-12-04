const http = require('http');
const path = require('path');

const express = require('express')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');



const app = express();

app.set('view engine','ejs');
app.set('views','views');



app.use(bodyParser.urlencoded({extended: 'false'}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use('/',(req,res,next)=>{
    res.status(404).render('404',{docTitle:"Page Not Found!!",path:''});
});

const server = http.createServer(app);


server.listen(3000);