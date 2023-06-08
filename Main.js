const Article = require('./models/Article').Article;
const {Articlerouter} = require('./controllers/ArticleController');
// const {ThemedArticlerouter} = require('./controllers/ThemedArticleController')
const cors = require('cors');

const mongoose = require('mongoose');
const express = require ('express');
const app = express();


mongoose.connect ('mongodb+srv://root:root@cluster0.tedudtq.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.listen (3001,()=>{
    console.log('listening to http://localhost:3001/')
});

app.use(cors('*'))
app.use(Articlerouter)