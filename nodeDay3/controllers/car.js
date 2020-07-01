const express=require('express');
const db=require('../config/database');
const { response } = require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    db.query('SELECT * FROM cars',(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
               res.status(200).json({
                   cars:result
               });
            }
            else
            {
                res.status(200).json({
                    msg:'No data available'
                });
            }
        }
        else
        {
            res.status(401).json({
                msg:'Error occured',
                error:err
            });
        }
    });
});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    db.query('SELECT * FROM cars WHERE id=?',[id],(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
               res.status(200).json({
                   car:result
               });
            }
            else
            {
               res.status(200).json({
                   msg:'no data found'
               });
            }
        }
        else
        {
             res.status(401).json({
                 msg:'error occured',
                 error:err
             });
        }
    });
});
router.post('/add',(req,res)=>{
    let {name,country,model,company}=req.body;
    let body={name:name,country:country,model:model,company:company};
    let sql='INSERT INTO cars SET ?';
    let query=db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'Car added'
            });
        }
        else
        {
            res.status(401).json({
                msg:'error occured',
                error:err
            });
        }
    });
});
router.put('/:id',(req,res)=>{
    let {id}=req.params;
    let {name,country,model,company}=req.body;
    let sql='update cars set name=?,country=?,model=?,company=? where id=?';
    let data=[name,country,model,company,id];
    let query=db.query(sql,data,(err,result)=>{
       if(!err)
       {
            res.status(200).json({
                msg:'Car details updated'
            });
       }
       else
       {
          res.status(401).json({
              msg:'error occured',
              error:err
          });
       }
    });
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='delete from cars where id=?';
    let body=[id];
    let query=db.query(sql,body,(err,result)=>{
         if(!err)
         {
            res.status(200).json({
                msg:'Car deleted'
            });
         }
         else
         {
           res.status(401).json({
               msg:'error occured',
               error:err
           });
         }
    });
});
module.exports=router;