const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: { type: String, required: true, minlength: 1 },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  thread: { type: mongoose.Schema.Types.ObjectId, ref: 'Thread', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);