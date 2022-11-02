const express= require('express');
const router= express.Router();
const News=require('../model/news');
const mongoose=require('mongoose');

//get data

router.get('/',(req,res,next)=>{
   News.find()
   .then(result=>{
    res.status(200).json({
        newsData:result

    });
   })
   .catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
   });
});
router.get('/:id',(req,res,next)=>{
    console.log(req.params.id);
    News.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            newsData:result
    
        })
       })
       .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
       });
})

//post or add data

router.post('/',(req,res,next)=>{
    const news=new News({
        _id:new mongoose.Types.ObjectId,
        section:req.body.section,
        heading:req.body.heading,
        date:req.body.date,
        content:req.body.content,
        articleby:req.body.articleby
    
    })
    news.save()
    .then(
        result=>{
            console.log(result);
            res.status(200).json({
                newNews:result
            });
        })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
 
});

//delete request

router.delete('/:id',(req,res,next)=>{
    News.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'data deleted',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

//update request or put request

router.put('/:id',(req,res,next)=>{
    console.log(req.params.id);
    News.findOneAndUpdate({
       _id:req.params.id 
    },{
        $set:{
            section:req.body.section,
            heading:req.body.heading,
            date:req.body.date,
            content:req.body.content,
            articleby:req.body.articleby
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_data:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})



module.exports =router;