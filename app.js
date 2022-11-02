const express= require('express');
const app= express();
const newsRoute=require('./api1/routes/news');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');



//connection with mongodb

mongoose.connect('mongodb+srv://SamaviahWaize:mongosama@cluster.ahkxdj2.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
    console.log('connection fail');
});
mongoose.connection.on('connected',connected=>{
    console.log('connected');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/news',newsRoute);



app.use((req,res,next)=>{
    res.status(404).json({
        message:'bad request'
    })
})
module.exports=app;