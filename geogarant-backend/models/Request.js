const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  cadastralNumber: {
    type: String,
    trim: true,
    default: ''
  },
  message: {
    type: String,
    trim: true,
    default: ''
  },
  status: {
    type: String,
    enum: ['new', 'in_work', 'completed', 'rejected'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Request', requestSchema);