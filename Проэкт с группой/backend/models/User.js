const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, minlength: 3 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/, 'Пожалуйста, введите действительный адрес электронной почты']
  },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['user', 'moderator', 'admin'], default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
