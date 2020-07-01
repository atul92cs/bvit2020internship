const mysql=require('mysql');
const { response } = require('express');
const db=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'cardb',
    multipleStatements:true
});

db.connect((err)=>{
    if(!err)
    {
        console.log('db connected');
    }
    else
    {
         console.log(`Error occured err: ${err}`);
    }
});
module.exports=db;