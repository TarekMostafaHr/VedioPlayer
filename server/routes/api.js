const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const vedio = require('../models/vedio');


const db = "mongodb://usertarek:passtarek@ds129434.mlab.com:29434/mynewvideoplayer"
mongoose.Promise = global.Promise;
mongoose.connect(db,function(err){
    if(err){
        console.error("Error!" + err);
    }
});


router.get('/vedios',function(req, res){
    console.log('get request for all vedios');
    vedio.find({})
    .exec(function(err, vedios){
        if (err){
            console.log('error retriving vedios');            
        }else{
            res.json(vedios)
            console.log(vedios)
        }
    });
});

router.get('/vedios/:id',function(req, res){
    console.log('get request for a single vedio');
    vedio.findById(req.params.id)
    .exec(function(err, vedio){
        if (err){
            console.log('error retriving vedio');            
        }else{
            res.json(vedio)
        }
    });    
});

router.post('/vedio', function(req, res){
    console.log('post a vedio');
    var newVedio = new vedio();
    newVedio.title = req.body.title;
    newVedio.url = req.body.url;
    newVedio.description = req.body.description;
    newVedio.save(function(err, insertedVedio){
        if(err){
            console.log("error saving vedio");
        }else{
            res.json(insertedVedio);
        }
    })
});


router.put('/vedio/:id',function(req, res){
    console.log('Update a vedio');
    vedio.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    { new: true},
    function(err, updatedVedio){
        if(err){
            res.send("Error updating vedio");
        }else{
            res.json(updatedVedio);
        }            
    }
)
});

router.delete('/vedio/:id', function(req,res){
    console.log('vedio is deleted')
    vedio.findByIdAndRemove(req.params.id, function(err, deletedVedio){
        if(err){
            res.send('Error deleting vedio');
        }else{
            res.json(deletedVedio);
        }
    })
})

module.exports = router;

