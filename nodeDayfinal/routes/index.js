const express=require('express');
const router=express.Router();
const db=require('../config/database');
router.get('/',(req,res)=>{
    let sql='select artist.id,artist.name,artist.picture,genre.name as genre,type.name as type from artist join genre on genre.id=artist.genre join type on type.id=artist.type';
    db.query(sql,(err,result)=>{
        if(!err)
        {
           res.render('index',{artists:result});
        }
        else
        {
           res.render('index',{error:err});
        }
    });
});
router.get('/getartist/:id',(req,res)=>{
    let sql='select * from artist where id=?';
    db.query(sql,[id],(err,result)=>{
        if(!err)
        {
           res.render('artist',{artist:result});
        }
        else
        {
           res.render('artist',{error:err});
        }
    });
});
router.get('/artist/add',(req,res)=>{
   let sql='select * from artist';
   db.query(sql,(err,result1)=>{
       if(!err)
       {
          let sql2='select * from type';
          db.query(sql2,(error,result2)=>{
              if(!error)
              {
                 let sql3='select * from genre';
                 db.query(sql3,(error1,result3)=>{
                     if(!error1)
                     {
                        res.render('addartist',{artists:result1,types:result2,genres:result3,layout:'secondary'});
                     }
                     else
                     {
                        res.render('addartist',{error:error1});
                     }
                 });
              }
              else
              {
                 res.render('addartist',{err:error});
              }
          });
       }
       else
       {
           res.render('addartist',{error:err});
       }
   });
});
router.get('/artist/:id',(req,res)=>{
    let {id}=req.params;
    let sql='select * from artist where id=?';
    db.query(sql,[id],(err,result1)=>{
        if(!err)
        {
           let sql2='select * from type';
           db.query(sql2,(error,result2)=>{
               if(!error)
               {
                  let sql3='select * from genre';
                  db.query(sql3,(error1,result3)=>{
                      if(!error1)
                      {
                         res.render('editartist',{artist:result1,type:result2,genre:result3});
                      }
                      else
                      {
                         res.render('editartist',{error:error1});
                      }
                  });
               }
               else
               {
                  res.render('editartist',{err:error});
               }
           });
        }
        else
        {
            res.render('editartist',{error:err});
        }
    });
 });
 router.get('/album/:id',(req,res)=>{
     let {id}=req.params;
     let sql='select album.id,album.name,artist.name from album join artist on artist.id =album.artist where album.artist=?';
     db.query(sql,[id],(err,result)=>{
         if(!err)
         {
             let sql='select * from artist';
             db.query(sql,(error,result1)=>{
                 if(!err)
                 {
                    res.render('album',{albums:result,artists:result1});
                 }
                 else
                 {
                      res.render('album',{error:error});
                 }
             });
         }
         else
         {
            res.render('album',{error:err});
         }
     });
 });
 router.get('/song/:id',(req,res)=>{
     let sql='select song.id,song.name,album.name from song join album on album.id=song.album where song.album=?';
     let {id}=req.params;
     db.query(sql,[id],(err,result)=>{
         if(!err)
         {
            let sql='select * from album';
            db.query(sql,(error,result1)=>{
               if(!error)
               {
                  res.render('song',{songs:result,albums:result1});
               }
               else
               {
                    res.render('song',{error:error});
               }
            });
         }
         else
         {
              res.render('song',{error:err});
         }
     });
 });
 router.get('/type',(req,res)=>{
     let sql='select * from type';
     db.query(sql,(err,result)=>{
         if(!err)
         {
            res.render('type',{types:result,layout:'secondary'});
 
         }
         else
         {
              res.render('type',{error:err,layout:'secondary'});
         } 
     });
 });
 router.get('/genre',(req,res)=>{
     let sql='select * from genre';
     db.query(sql,(err,result)=>{
         if(!err)
         {
             res.render('genre',{genres:result,layout:'secondary'});
         }
         else
         {
               res.render('genre',{error:err,layout:'secondary'});
         }
     });
 });
 router.get('/album/add',(req,res)=>{
    let sql='select * from artist';

    db.query(sql,(err,result)=>{
        if(!err)
        {
           let sql1='select * from album';
           db.query(sql1,(error,result1)=>{
               if(!err)
               {
                 res.render('addalbum',{artists:result,albums:result1,layout:'secondary'});
               }
               else
               {
                 res.render('addalbum',{error:error,layout:'secondary'});
               }
           });
        }
        else
        {
             res.render('addalbum',{error:err,layout:'secondary'});
        }
    });
 });
 module.exports=router;