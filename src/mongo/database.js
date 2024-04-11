
const mongoose = require('mongoose');

const mongo= MONGODB_URI

mongoose.connect(mongo, {
    
}).then(() => {
    console.log('Conexión a la base de datos exitosa');
}).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

module.exports = mongoose