const express=require('express');
const router=express.Router();
const db=require('../config/database');

router.post('/add',(req,res)=>{
    const {name}=req.body;
    let sql='insert into company set ?';
    let body={name:name};
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
          res.status(200).json({
              msg:'company added'
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
router.get('/get',(req,res)=>{
    let sql='select * from company';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
               res.status(200).json({
                   companies:result
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
router.put('/:id',(req,res)=>{
    let {id}=req.params;
    let {name}=req.body;
    let body=[name,id];
    let sql='update company set name=? where id=?';
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'company details updated'
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
router.delete('/delete/:id',(req,res)=>{
    let {id}=req.params;
    let sql='delete from company where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'company details deleted'
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