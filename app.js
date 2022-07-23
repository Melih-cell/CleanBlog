const express = require('express');
const app = express();
const ejs = require('ejs');
const Photo = require('./models/Photo');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const textControllers = require('./controllers/textControllers');
const pageControllers = require('./controllers/pageControllers');

// ! Mongoose connect
mongoose.connect('mongodb://127.0.0.1:27017/melihdokuzlar');
app.use(express.static('public'));

app.set('view engine', 'ejs');

// * MiddleWare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// * Routes
app.get('/', textControllers.getAllPhotos);
app.get('/photos/:id', textControllers.getPost);
app.put('/photos/:id', textControllers.updateText);
app.delete('/photos/:id', textControllers.deleteText);
app.post('/photos', textControllers.createText);
app.get('/photos/edit/:id', textControllers.editText);

// * Pages
app.get('/about', pageControllers.getAboutPage);
app.get('/add_post', pageControllers.getAddPage);
app.get('/post', pageControllers.getPostPage);

// ! Port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is create port : ${port} `);
});
