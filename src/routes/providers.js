const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Tehran', country: 'Iran' },
    { id: 2, name: 'Shiraz', country: 'Iran' },
    { id: 3, name: 'Istanbul', country: 'Turkey' }
  ]);
});

module.exports = router;
