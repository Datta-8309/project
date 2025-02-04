// services/airtableService.js
const fetch = require('node-fetch');
const config = require('../config/airtable');

const AirtableUrl = `https://api.airtable.com/v0/${config.AirtableBaseId}/${config.AirtableTableId}`;

async function getRecords() {
    try {
        const url = `https://api.airtable.com/v0/${config.AirtableBaseId}/${config.AirtableTableId}`;
        console.log('Fetching records from:', url);

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${config.AirtableAccessToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (response.ok) {
            return response.json();
        } else {
            const errorMessage = await response.text();
            throw new Error(`Error fetching records: ${response.statusText} - ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error with request:', error);
        throw error;
    }
}

async function addRecord(data) {
    try {
        const response = await fetch(AirtableUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${config.AirtableAccessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fields: data })
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error adding record:', response.statusText);
        }
    } catch (error) {
        console.error('Error with request:', error);
        throw error;
    }
}

module.exports = {
    getRecords,
    addRecord
};