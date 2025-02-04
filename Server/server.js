// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const airtableRoutes = require('./routes/airtable');
const sourceRoutes = require('./routes/source');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', airtableRoutes);
app.use('/source', sourceRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});