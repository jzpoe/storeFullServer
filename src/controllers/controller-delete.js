require('dotenv').config({ path: '../.env' });
const cloudinary = require('cloudinary').v2;
const Image = require("../model/model-text");



cloudinary.config({
    
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret

  
});

const deleteImage = async (req, res) => {
  const userID = req.query;

  try {
    const deleteUser = await cloudinary.uploader.destroy(userID);
    if (!deleteUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario eliminado correctamente", deleteUser });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};


module.exports = deleteImage