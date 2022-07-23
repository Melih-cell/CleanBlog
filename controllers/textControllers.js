const Photo = require('../models/Photo');

exports.getAllPhotos = async (req, res) => {
  const photos = await Photo.find({}).sort('-dateCreated');
  res.render('index', {
    photos,
  });
};

exports.getPost = async (req, res) => {
  const post = await Photo.findById(req.params.id);
  res.render('post', {
    post,
  });
};

exports.updateText = async (req, res) => {
  const text = await Photo.findOne({ _id: req.params.id });
  text.title = req.body.title;
  text.description = req.body.description;
  text.save();

  await res.redirect(`/photos/${req.params.id}`);
};

exports.deleteText = async (req, res) => {
  await res.redirect('/');
};

exports.createText = async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
};

exports.editText = async (req, res) => {
  const text = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    text,
  });
};
