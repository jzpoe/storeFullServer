
const mongoose = require('mongoose');

//console.log('Valor de MONGODB_URI:', process.env.MONGODB_URI);
mongoose.connect("mongodb+srv://jzpoe:jzpoeluna@task01.iltn4nc.mongodb.net/storeFull", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión a la base de datos exitosa');
}).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

module.exports = mongoose