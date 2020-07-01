const express=require('express');
const car=require('./controllers/car');
const country=require('./controllers/country');
const company=require('./controllers/company');
const db=require('./config/database');
const port=8080||process.env.port;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',car);
app.use('/country',country);
app.use('/company',company);
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});