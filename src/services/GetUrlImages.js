const S3Storage = require('../utils/S3Storage');

class GetUrlImages {
  async execute(filename) {
    try {
      const s3 = S3Storage;
      const result = await s3.getUrl(filename);
      return result;
    } catch (error) {
      console.log({
        'localerror': 'GetUrl',
        error,
      });
    }
  }
}

module.exports = GetUrlImages;
