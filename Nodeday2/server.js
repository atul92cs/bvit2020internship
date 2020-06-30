const express=require('express');
const exphbs=require('express-handlebars');
const path=require('path');
const car=require('./controllers/index');
const port=8080||process.env.PORT;
const app=express();
app.engine('handlebars',exphbs({deafaultLayout:'main'}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','handlebars');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',car);
app.listen(port,()=>{
    console.log(`Server started on ${port}`);
});
