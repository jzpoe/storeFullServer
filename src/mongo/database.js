
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    
}).then(() => {
    console.log('Conexión a la base de datos exitosa');
}).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

module.exports = mongoose