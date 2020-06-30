const express=require('express');
const router=express.Router();
const Car=require('../models/Car');
let Cars=[];
router.get('/',(req,res)=>{
    res.status(200).json({
        msg:'Welcome to your first api'
    });
});
router.get('/show',(req,res)=>{
    res.status(200).json({
        cars:Cars
    });
});
router.post('/add',(req,res)=>{
    let {name,company,model}=req.body;
    let newCar=new Car(name,company,model);
    Cars.push(newCar);
    res.status(200).json({
        msg:'Car created'
    });
});
router.delete('/:name',(req,res)=>{
  let {name}=req.params;
  //console.log(name);
  let newCars=Cars.filter(car=>{
    return car.name!==name;
  });
  res.status(200).json({
    cars:newCars
  });
});
module.exports=router;
