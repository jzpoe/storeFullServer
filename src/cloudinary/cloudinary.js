
const cloudinary = require("cloudinary").v2


require('dotenv').config({ path: '../.env' });


cloudinary.config({
    
cloudinary_url: process.env.CLOUDINARY_URL,
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret

  
});

module.exports = cloudinary
