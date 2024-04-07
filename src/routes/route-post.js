

const express = require('express');
const router = express.Router();
const uploadImg = require('../controllers/controller-update')
const upload = require('../multer/multer')
const renderImagenes = require('../controllers/controller-get')
const deleteImage = require('../controllers/controller-delete')
const multer = require("multer");



router.get('/api/render', renderImagenes)
router.delete('/api/delete/:id', deleteImage)




module.exports = router

