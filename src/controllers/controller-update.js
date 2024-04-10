

const multer = require("multer");
const Image = require("../model/model-text");
const express = require('express');
const router = express.Router();
const cloudinary = require("cloudinary").v2
const Text = require("../model/model-text")
const fs = require("fs-extra");


const upload = multer({dest:'uploads'})

router.post('/api/upload', upload.single('image'), async  (req, res) => {
  try {
    let { description,price,talla } = req.body;
    const bufferStream = req.file.path; // El buffer de la imagen

    const result = await cloudinary.uploader.upload(bufferStream, { // Pasar el buffer directamente
      folder: 'STORE'
    });

    console.log('Descripción de la imagen:', description);
    console.log('URL de la imagen:', result);
    console.log('ruta fle:', req.file);

    // const newImage = new Image({
    //   imageUrl: result.url,
    //   public_id: result.public_id

    // });

    const newText = new Text({
      description: description,
      price: price,
      talla: talla,

    })
    
    // await newImage.save();
    await newText.save()
    await fs.unlink(req.file.path)

    res.status(200).json({ imageUrl: result, message: 'Imagen subida correctamente' });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ message: 'Error al subir la imagen' });
  }
});
module.exports = router;

