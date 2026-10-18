const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, '../../uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

function saveFile(file) {
  if (!file) {
    return null;
  }

  const destination = path.join(uploadDir, file.originalname);
  fs.writeFileSync(destination, file.buffer || '');

  return {
    fileName: file.originalname,
    path: destination,
    size: file.size || 0,
    mimeType: file.mimetype
  };
}

module.exports = {
  saveFile,
  uploadDir
};
