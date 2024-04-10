

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
const Text = require("../model/model-text")
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

                const textoDescription = await Text.find()
                
    
            // Mapear los recursos de Cloudinary a objetos con URL e información adicional
            const imagesData = result.resources.map(resource => {
                return {
                    url: resource.url,
                    description: resource.public_id, // Puedes usar cualquier otra propiedad como descripción
                    // Agrega más propiedades si es necesario, como tamaño, fecha de creación, etc.
                };
            });
    
            console.log(imagesData); // Solo para depuración
    
            // Devuelve los datos de las imágenes al cliente
            res.json(imagesData);
            res.json(textoDescription)
        } catch (error) {
            console.error('Error al obtener las imágenes:', error);
            res.status(500).json({ message: 'Error al obtener las imágenes' });
        }
    });

  module.exports = router;
