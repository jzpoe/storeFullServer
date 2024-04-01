

const Image = require("../model/model-image");

const uploadImg = async (req, res) => {
  try {
    let { description } = req.body; // Obtener la descripción desde el cuerpo de la solicitud
    let imageUrl = req.file.path; // Obtener la ruta de la imagen subida


    console.log('Descripción de la imagen:', description);
    console.log('direccion de la imagen:', imageUrl);


    const newImage = new Image({
      description: description,
      imageUrl: imageUrl, // Utiliza 'path' directamente para la URL de la imagen
      size: req.file.size // Añade el tamaño de la imagen si lo necesitas

    });
    await newImage.save();

    res.status(200).json({ message: 'Imagen subida correctamente' });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ message: 'Error al subir la imagen' });
  }
};

module.exports = uploadImg;