const express=require('express');
const db=require('../config/database');
const router=express.Router();
router.post('/add',(req,res)=>{
    const {name,album}=req.body;
    let sql='insert into song set ?';
    let body={name:name,album:album};
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            req.flash('success_msg','song added');
            res.redirect('/song');
        }
        else
        {
           req.flash('error',err);
           res.redirect('/song');
        }
    });
});
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {name,album}=req.body;
    let sql='update song set name=?,album=? where id=?';
    let body=[name,album,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            req.flash('success_msg','Song updated');
            res.redirect('/song');
        }
        else
        {
            req.flash('error',err);
            res.redirect('/song');
        }
    });
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='delete from song where id=?';
    db.query(sql,[id],(err,result)=>{
        if(!err)
        {
           res.status(200).json({
               msg:'Song deleted'
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