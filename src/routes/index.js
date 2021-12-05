const { Router } = require('express');
const multer = require('multer');

const UploadImagesService = require('../services/UploadImagesService');
const DeleteImagesService = require('../services/DeleteImagesService');

const uploadConfig = require('../config/upload');

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/', upload.single('image'), async (request, response) => {
  const { file } = request;
  
  const uploadImagesService = new UploadImagesService();

  await uploadImagesService.execute(file);

  return response.json({ success: true });
});

routes.delete('/:filename', async (request, response) => {
  const { filename } = request.params;

  const deleteImagesService = new DeleteImagesService();

  await deleteImagesService.execute(filename);

  return response.send();
});

module.exports = routes;
