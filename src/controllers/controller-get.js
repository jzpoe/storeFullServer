

// const Image = require("../model/model-image");



// const renderImagenes = async(req, res)=>{

// try {
//     const imagenes = await Image.find();
//     res.json(imagenes)
// } catch (error) {
//     console.error('Error al obtener las imágenes:', error);
//     res.status(500).json({ message: 'Error al obtener las imágenes' });
// }

// }

// module.exports = renderImagenes

const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '../.env' });


cloudinary.config({
    
      cloud_name: process.env.cloud_name,
      api_key: process.env.api_key,
      api_secret: process.env.api_secret
    
      
    });

router.get('/api/render', async (req, res) => {
    try {
      // Utiliza el método `search` de Cloudinary para obtener todas las imágenes
      const result = await cloudinary.search
        .expression('folder:STORE') // Filtra por la carpeta 'STORE'
        .execute();
  
      // Extrae las URLs de las imágenes de los resultados
      const imageUrls = result.resources.map(resource => resource.url);
  
      res.json(imageUrls); // Devuelve las URLs de las imágenes al cliente
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
      res.status(500).json({ message: 'Error al obtener las imágenes' });
    }
  });

  module.exports = router;
