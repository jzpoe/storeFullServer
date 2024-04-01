const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  // Nombre de la imagen (opcional)
  name: {
    type: String,
    required: false
  },
  // Descripción de la imagen (opcional)
  description: {
    type: String,
    required: false
  },
  // URL de la imagen (obligatorio)
  imageUrl: {
    type: String,
    required: true
  },
  // Fecha de creación de la imagen (automática)
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;