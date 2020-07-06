const db=require('../config/database');
const express=require('express');
const router=express.Router();
const multer=require('multer');
const cloudinary=require('cloudinary');
const storage=multer.diskStorage({
    filename:(req,file,callback)=>{
        callback(null,Date.now()+file.originalname);
    }
});
const upload=multer({storage:storage});
cloudinary.config({
cloud_name:'dkhk4gyey',
api_key:'459656749761335',
api_secret:'AS_y6ZzH7FAjeoIxF1IjtMFKzQg'
});
router.post('/add',upload.single('picture'),async(req,res)=>{
    const {name,type,genre}=req.body;
    const {picture}=req.file.path;
    let uploadedpicture=await cloudinary.v2.uploader.upload(picture);
    let sql='insert into artist set ?';
    let body={name:name,type:type,genre:genre,picture:uploadedpicture};
    db.query(sql,body,(err,result)=>{
       if(err)
       {
        req.flash('error',err)
          res.redirect('/');
       }
       else
       {
         req,flash('success_msg','Artist created')
          res.redirect('/');
       }
    });

});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const sql='select * from artist where artist.id=?';
    const body=[id];
    db.query(sql,body,(err,result)=>{
        if(err)
        {
           res.status(401).json({
              msg:'error occured',
              error:err
           });
        }
        else
        {
             res.status(200).json({
                 artist:result
             });
        }
    });
});
router.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    const {name,type,genre}=req.body;
    let body= [name,type,genre,id];
    let sql='update artist set name=?,type=?,genre=? where id=?';
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
             req.flash('success_msg','Artist updated');
             res.redirect('/');
        }
        else
        {
             req.flash('error',err);
             res.redirect('/');
        }
    });
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='delete from artist where id=?';
    db.query(sql,[id],(err,result)=>{
        if(!err)
        {
          res.status(200).json({
              msg:'Artist deleted'
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