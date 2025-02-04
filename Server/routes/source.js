// routes/source.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Source route');
});

module.exports = router;