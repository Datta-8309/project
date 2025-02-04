const base = require('../config/airtable');

async function testConnection() {
    try {
        const table = base('Vendors'); // Replace with your table name
        const records = await table.select({
            maxRecords: 1
        }).firstPage();
        console.log('Connection successful!');
        console.log('Sample record:', records[0]);
    } catch (error) {
        console.error('Connection failed:', error);
    }
}


testConnection();