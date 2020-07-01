const express=require('express');
const router=express.Router();
const db=require('../config/database');
router.post('/add',(req,res)=>{
    let {name}=req.body;
    let sql='insert into country set ?';
    let body={name:name};
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
             res.status(200).json({
                 msg:'country created'
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
    let sql='select * from country';
    db.query(sql,(err,result)=>{
        if(!err)
        {
             res.status(200).json({
                 countries:result
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
    let {name}=req.body;
    let sql='update country set name=? where id=?';
    let body=[name,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'coutnry details updated'
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
    let {id}=req.params;
    let sql='delete from country where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'country deleted'
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