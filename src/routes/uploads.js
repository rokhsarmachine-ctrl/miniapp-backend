const express = require('express');
const multer = require('multer');
const { requireAuth } = require('../middleware/auth');
const { saveFile } = require('../services/storage');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', requireAuth, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const savedFile = saveFile(req.file);

  return res.status(201).json({
    message: 'File uploaded successfully',
    file: savedFile
  });
});

module.exports = router;
