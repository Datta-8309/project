// routes/airtable.js
const express = require('express');
const router = express.Router();
const airtableService = require('../services/airtableService');

router.get('/records', async (req, res) => {
    try {
        const records = await airtableService.getRecords();
        res.json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/records', async (req, res) => {
    try {
        const { name, notes } = req.body;
        const data = { "Name": name, "Notes": notes };
        const result = await airtableService.addRecord(data);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;