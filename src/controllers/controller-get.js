

const Image = require("../model/model-image");



const renderImagenes = async(req, res)=>{

try {
    const imagenes = await Image.find();
    res.json(imagenes)
} catch (error) {
    console.error('Error al obtener las imágenes:', error);
    res.status(500).json({ message: 'Error al obtener las imágenes' });
}

}

module.exports = renderImagenes

