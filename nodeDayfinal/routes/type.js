const db=require('../config/database');
const express=require('express');
const router=express.Router();
router.post('/add',(req,res)=>{
    let {name}=req.body;
    let sql='insert into type set ?';
    let body={name:name};
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           req.flash('success_msg','type added');
           res.redirect('/type');
        }
        else
        {
            req.flash('error',err);
            req.redirect('/type');
        }
    });
});
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    let sql='update type set name =? where id=?';
    let body=[name,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           req.flash('success_msg','type updated');
           res.redirect('/type');
        }
        else
        {
            req.flash('error',err);
            res.redirect('/type');
        }
    });
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='delete from type where id=?';
    db.query(sql,[id],(err,result)=>{
        if(!err)
        {
            req.flash('success_msg','type deleted');
            res.redirect('/type');
        }
        else
        {
           req.flash('error',err);
           res.redirect('/type');
        }
    });
});
module.exports=router;