const express = require('express');
const app = express();
const ejs = require('ejs');
const Photo = require('./models/Photo');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/melihdokuzlar');
app.use(express.static('public'));
//MiddleWare isteği sonlandır
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', {
    photos,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is create port : ${port} `);
});
