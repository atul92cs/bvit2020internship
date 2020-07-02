const express=require('express');
const db=require('../config/database');
const router=express.Router();
router.get('/',(req,res)=>{
    db.query('select * from country',(err,result)=>{
        if(!err)
        {
            db.query('select * from company',(error,results)=>{
                if(!error)
                {
                    db.query('select * from cars',(er,carres)=>{
                        res.render('index',{countries:result,companies:results,cars:carres});
                    });
                }
                else
                {
                    res.status(402).json({
                        msg:'error',
                        error:error
                    });
                }
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