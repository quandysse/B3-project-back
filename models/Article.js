const { Schema, model } = require('mongoose')

const articleSchema = new Schema({
    category: String,
    title: String,
    artist: String,
    numberTop: Number,
    durration: String,
    album: String,
    credits: String,
    aboutClip: String,
    aboutArtist: String,
    date: String,
    isClip: Boolean,
    miniature: {
        type:Schema.Types.ObjectId, 
        ref:'image'
        },
    images: [{
        type:Schema.Types.ObjectId, 
        ref:'image'
        }]
})


exports.Article = model('article', articleSchema)