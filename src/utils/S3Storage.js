const path = require('path');
const fs = require('fs');
const mime = require('mime');
const aws = require('aws-sdk');
const { S3 } = require('aws-sdk')

const uploadConfig = require('../config/upload');


class S3Storage {
  client = new aws.S3({
    region: 'us-east-1',
  });

  async saveFile(filename) {
    const originalPath = path.resolve(uploadConfig.directory, filename);
    
    const ContentType = mime.getType(originalPath);

    if (!ContentType) {
      throw new Error('File not found');
    }

    const fileContent = await fs.promises.readFile(originalPath);

    this.client
      .putObject({
        Bucket: 'aula.node.upload',
        Key: filename,
        Body: fileContent,
        ContentType,
      })
      .promise();

    await fs.promises.unlink(originalPath);
  }

  async deleteFile(filename) {
    await this.client
      .deleteObject({
        Bucket: 'aula.node.upload',
        Key: filename,
      })
      .promise();
  }
}

module.exports = new S3Storage();