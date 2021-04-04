const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: res.statusCode,
    success: true,
    data: ['😀', '😳', '🙄']
  });
});

module.exports = router;
