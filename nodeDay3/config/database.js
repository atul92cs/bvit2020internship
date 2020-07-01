const mysql=require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'carsinfo',
    multipleStatements:'true'
});
db.connect((err)=>{
    if(err)
    {
    console.log(err);
    }
    else
    {
        console.log('Db connected');
    }
});
module.exports=db;