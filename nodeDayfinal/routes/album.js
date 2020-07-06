const db=require('../config/database');
const express=require('express');
const router=express.Router();
router.post('/add',(req,res)=>{
    const {bandid,name}=req.body;
    let body={name:name,artist:bandid};
    let sql='insert into album set ?';
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           req.flash('success_msg','Album created');
           res.redirect('/album');
        }
        else
        {
          req.flash('error',err);
          res.redirect('/album');
        }
    });
});
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    let body=[name,id];
    let sql='update album set name=? where id=?';
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           req.flash('success_msg','Album updated');
           res.redirect('/album');
        }
        else
        {
           req.flash('error',err);
           res.redirect('/album');
        }
    });
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    let sql ='delete from album where id=?';
    db.query(sql,[id],(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'Album deleted'
            });
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
module.exports=router;