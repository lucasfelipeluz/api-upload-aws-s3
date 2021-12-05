const S3Storage = require('../utils/S3Storage');

class UploadImagesService {
  async execute(filename) {
    try {
      const s3 = S3Storage;
      await s3.saveFile(filename);
      return true;
    } catch (error) {
      console.log({
        'localerror': 'UploadImages',
        error,
      });
    }   
    
  }
}

module.exports = UploadImagesService;
