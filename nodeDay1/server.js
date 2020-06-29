const express=require('express');
const PORT=process.env.PORT||8080;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.status(200).json({
         msg:'Hello from the node server'
    });
});
app.post('/',(req,res)=>{
    let {name}=req.body;
    res.status(200).json({
        msg:`Hello ${name} welcome to node.js server`
    });
});

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
});
