const S3Storage = require('../utils/S3Storage');

class UploadImagesService {
  async execute(file) {
    try {
      const s3 = S3Storage;
      await s3.saveFile(file.filename);
      
    } catch (error) {
      console.log({
        'localerror': 'UploadImages',
        error,
      });
    }   
    
  }
}

module.exports = UploadImagesService;
