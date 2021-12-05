const S3Storage = require('../utils/S3Storage');

class DeleteImagesService {
  async execute(filename) {
    try {
      const s3 = S3Storage;
      await s3.deleteFile(filename);
      return true;
    } catch (error) {
      console.log({
        'localerror': 'DeleteImage',
        error,
      });
    }
  }
}

module.exports = DeleteImagesService;
