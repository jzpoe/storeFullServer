

const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
  // Nombre de la imagen (opcional)
  imagenPublicId: {
    type: String,
  },
  // Descripción de la imagen (opcional)
  description: {
    type: String,
    required: false
  },
  price:{
    type: String,
    required: false
  },
  talla:{
    type: String,
    required: false
  },
  // URL de la imagen (obligatorio)
  //imageUrl: {
    //type: String,
    //required: true
  //},
  // Fecha de creación de la imagen (automática)
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Text = mongoose.model('Text', TextSchema);

module.exports = Text;