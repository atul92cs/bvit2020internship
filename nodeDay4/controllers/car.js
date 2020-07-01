const db=require('../config/database');
const express=require('express');
const router=express.Router();
router.post('/add',(req,res)=>{
   const {name,company,model,origin}=req.body;
   let body={name:name,company:company,model:model,origin:origin};
   let sql='insert into cars set ?';
   db.query(sql,body,(err,response)=>{
      if(!err)
      {
         res.status(200).json({
             msg:'car created'
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
    let sql='select cars.id,cars.name as name,cars.model as model,company.name as company,country.name as country from cars join company on company.id = cars.company join country on country.id = cars.origin';
    db.query(sql,(err,result)=>{
        if(!err)
        {
           res.status(200).json({
               cars:result
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
router.get('/get/:id',(req,res)=>{
    let {id}=req.params;
    let sql='select cars.id,cars.name as name,cars.model as model,company.name as company,country.name as country from cars join company on company.id=cars.company join country on country.id=cars.origin where cars.id=?';
    let param=[id];
    db.query(sql,param,(err,result)=>{
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
router.put('/:id',(req,res)=>{
     let {id}=req.params;
     let {name,company,model,origin}=req.body;
     let body=[name,company,model,origin,id];
     let sql='update cars set name=?,company=?,model=?,origin=? where id=?';
     db.query(sql,body,(err,resilt)=>{
         if(!err)
         {
           res.status(200).json({
               msg:'car details updated'
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
     let sql='delete from cars where id=?';
     let body=[id];
     db.query(sql,body,(err,result)=>{
         if(!err)
         {
            res.status(200).json({
                msg:'car deleted'
            });
         }
         else
         {
             res.status(401).json({
                 msg:'error occrued',
                 error:err
             });
         }
     });
});
module.exports=router;