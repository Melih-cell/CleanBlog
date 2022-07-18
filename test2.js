const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yeniData = new Schema({
  _id: Number,
  name: String,
  surname: String,
  age: Number,
});

mongoose.connect('mongodb://127.0.0.1:27017/melihdokuzlar');

const Data = mongoose.model('Data', yeniData);

// Data.create({
//   _id: 5,
//   name: 'Melih1234',
//   surname: 'Dokuzlar1324',
//   age: 23,
// });

Data.findByIdAndDelete(5, (err, data) => {
  console.log('delete');
});
