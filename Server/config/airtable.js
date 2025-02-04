// config/airtable.js
require('dotenv').config();

module.exports = {
    AirtableBaseId: process.env.AIRTABLE_BASE_ID,
    AirtableTableId: process.env.AIRTABLE_TABLE_ID,
    AirtableAccessToken: process.env.AIRTABLE_ACCESS_TOKEN
};