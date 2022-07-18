const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

Photo.create({
  title: 'yeni bir dünya',
  description: 'Açıklamaya gerek yok',
  
});
