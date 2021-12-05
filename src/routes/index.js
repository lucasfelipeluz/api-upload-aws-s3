const { Router } = require('express');
const multer = require('multer');

const UploadImagesService = require('../services/UploadImagesService');
const DeleteImagesService = require('../services/DeleteImagesService');

const uploadConfig = require('../config/upload');

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/', upload.single('image'), async (req, res) => {
  const { filename } = req.file;
  
  const uploadImagesService = new UploadImagesService();

  const status = await uploadImagesService.execute(filename);

  return res.json({
    status,
    filename,
  });
});

routes.delete('/:filename', async (req, res) => {
  const { filename } = req.params;

  const deleteImagesService = new DeleteImagesService();

  const status = await deleteImagesService.execute(filename);

  return res.json({
    status,
    filename,
  });
});

module.exports = routes;
