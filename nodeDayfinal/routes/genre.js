const express=require('express');
const db=require('../config/database');
const { route } = require('./album');
const router=express.Router();
router.post('/add',(req,res)=>{
    const {name}=req.body;
    let sql='insert into genre set ?';
    let body={name:name};
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           req.flash('success_msg','Genre created');
           res.redirect('/genre');
        }
        else
        {
           req.flash('error',err);
           res.redirect('/genre');
        }
    });
});
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    let sql='update genre set name=? where id=?';
    let body=[name,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           res.status(200).json({
               msg:'genre updated'
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
    let sql='delete from genre where id=?';
    db.query(sql,[id],(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'genre deleted'
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