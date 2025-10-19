const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 5 },
  description: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isLocked: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Thread', threadSchema);