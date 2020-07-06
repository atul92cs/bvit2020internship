const mysql=require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    port:3306,
    database:'musicDb',
    password:'seed',
    user:'root',
    multipleStatements:true
});
db.connect(err=>{
    if(err)
    {
       console.log('Error occured '+err);
    }
    else
    {
       console.log('Connected successful')
    }
});
module.exports=db;