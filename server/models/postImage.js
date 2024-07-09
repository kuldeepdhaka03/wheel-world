const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructure Schema from mongoose

const postImageSchema = new Schema({
  imageId: {
    type: Number,
    default: 0,
    unique: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
});

const PostImage = mongoose.model('PostImage', postImageSchema);
module.exports = PostImage;
