const { Schema, model } = require('mongoose')

const ImageSchema = new Schema({
    fileName: String,
    article: {
        type: Schema.Types.ObjectId,
        ref: 'article'
    }
});

exports.Image = model('image', ImageSchema)