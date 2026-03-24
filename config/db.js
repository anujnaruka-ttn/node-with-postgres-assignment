const pg = require('pg');
const Client = pg.Client();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

export const query = async (dbQuery,params=[]) => await client.query(dbQuery,params);