const express=require('express');
const db=require('./config/database');
const car=require('./controllers/car');
const port=8080||process.env.port;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/car',car);
app.listen(port,()=>{
    console.log('server started on');
});