

const express = require ('express');
const router = express.Router ();
const {Article} = require ('../models/Article');
const {Image} = require ('../models/Image');

// Image.create({fileName:'D.M.B-MINIATURE.png', article:'6480fdf68c096838c3435600'}).then(data =>{
    
//     Article.findByIdAndUpdate('6480fdf68c096838c3435600', {$push:{miniature:data._id}})

// }).catch(console.log)


// const list = ['HEAVEN-HELL-1.png', 'HEAVEN-HELL-2.png', 'HEAVEN-HELL-3.png', 'HEAVEN-HELL-4.png', 'HEAVEN-HELL-5.png', 'HEAVEN-HELL-6.png']

// list.forEach((name) => {
//   Image.create({fileName:name, article:"6480f9ea4430237db74490fa"}).then(data =>{
    
//     Article.findByIdAndUpdate("6480f9ea4430237db74490fa", {$addToSet:{images:data._id}}).catch(console.log)
  
//   }).catch(console.log)
// })


router.get('/articles', (req, res) =>{
    const filter = req.query
    const params = {}

    if (filter.startAt) {
        if (!params.numberTop) {
            params.numberTop = {}
        } 
        params.numberTop.$gte = filter.startAt
    }
    
    if (filter.endAt) {
        if (!params.numberTop) {
            params.numberTop = {}
        } 
        params.numberTop.$lte = filter.endAt
    }

    if (filter.arrayValues) {
        if (!params.numberTop) {
            params.numberTop = {}
        } 
        params.numberTop.$in = filter.arrayValues[1, 2]
    }


    if (['true', 'false'].includes(filter.isClip)) {
        params.isClip = filter.isClip === 'true' ? true: false
    }

    let request = Article.find(params).sort({numberTop : 1})

    if (filter.limit) {
        request = request.limit(filter.limit)
    }


   request.then(data =>{

       res.send(data)
       
   })
   .catch((err) =>{
       console.log(err)
       res.send('error dans la requête article !').status(400)
   }) 
   
})

router.get('/article/:id', (req, res) => {
    const {id} = req.params
    Article.findById(id).populate('miniature').populate('images').then(data =>{

        res.send(data)
        
    })
    .catch((err) =>{
        console.log(err)
        res.send('id invalide !').status(400)
    }) 
})

exports.Articlerouter = router;