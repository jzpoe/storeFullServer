const Image = require("../model/model-image");

const deleteImage = async (req, res) => {
  const userID = req.params.id;

  try {
    const deleteUser = await Image.findOneAndDelete(userID);
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