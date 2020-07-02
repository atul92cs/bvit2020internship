const express=require('express');
const car=require('./controllers/car');
const country=require('./controllers/country');
const company=require('./controllers/company');
const index=require('./controllers/index');
const db=require('./config/database');
const path=require('path');
const exphbs=require('express-handlebars');
const port=8080||process.env.port;
const hbs=require('handlebars');
const {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access');
const app=express();
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main',
handlebars:allowInsecurePrototypeAccess(hbs)}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',index);
app.use('/car',car);
app.use('/country',country);
app.use('/company',company);
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});