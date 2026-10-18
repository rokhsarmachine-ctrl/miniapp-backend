const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 1200, stock: 10 },
    { id: 2, name: 'Mouse', price: 25, stock: 50 }
  ]);
});

module.exports = router;
