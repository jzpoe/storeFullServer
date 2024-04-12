require('dotenv').config({ path: '../.env' });
const express = require('express');
const app= express()
const cors = require('cors')
const path = require('path');
const mongoose= require('./src/mongo/database')
const metodPost = require('./src/controllers/controller-update')
const renderImagenes = require('./src/controllers/controller-get')
const deleteImages = require('./src/routes/route-post')
const port = process.env.PORT;
const mongo= process.env.MONGODB_URI


app.use(cors())
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//app.use('/profile', express.static(path.join(__dirname, 'profile')));

app.use(express.urlencoded({ extended: true }));

app.use(metodPost)
app.use(renderImagenes)
app.use(deleteImages)

app.listen(port, (req, res)=>{
    console.log('conectado al puerto', port)
})



