const express=require('express');
const album=require('./routes/album');
const artist=require('./routes/artist');
const genre=require('./routes/genre');
const song=require('./routes/songs');
const type=require('./routes/type');
const index=require('./routes/index');
const db=require('./config/database');
const session=require('express-session');
const path=require('path');
const exphbs=require('express-handlebars');
const port=8080||process.env.port;
const hbs=require('handlebars');
const {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access');
const flash=require('connect-flash');
const app=express();
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main',
handlebars:allowInsecurePrototypeAccess(hbs)}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
app.use(flash());
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
app.use('/',index);
app.use('/artist',artist);
app.use('/genre',genre);
app.use('/type',type);
app.use('/song',song);
app.use('/album',album);
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});