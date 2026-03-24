const pg = require('pg');
const { Client } = pg;
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

// Connect to database
client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Database connection error:', err));

const query = async (dbQuery, params = []) => await client.query(dbQuery, params);

module.exports = { query };