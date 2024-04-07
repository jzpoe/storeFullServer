

const multer = require("multer");
const Image = require("../model/model-image");
const express = require('express');
const router = express.Router();
const cloudinary = require("cloudinary").v2


const upload = multer({dest:'uploads'})

router.post('/api/upload', upload.single('image'), async  (req, res) => {
  try {
    let { description } = req.body;
    const bufferStream = req.file.path; // El buffer de la imagen

    const result = await cloudinary.uploader.upload(bufferStream, { // Pasar el buffer directamente
      folder: 'STORE'
    });

    console.log('Descripción de la imagen:', description);
    console.log('URL de la imagen:', result.secure_url);
    console.log('ruta fle:', req.file);

    const newImage = new Image({
      description: description,
    });

    await newImage.save();

    res.status(200).json({ imageUrl: result.secure_url, message: 'Imagen subida correctamente' });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ message: 'Error al subir la imagen' });
  }
});
module.exports = router;

