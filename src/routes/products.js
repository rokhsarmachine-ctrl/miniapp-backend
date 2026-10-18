const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Provider A', contactEmail: 'a@example.com' },
    { id: 2, name: 'Provider B', contactEmail: 'b@example.com' }
  ]);
});

module.exports = router;
