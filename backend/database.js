const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'postgresql',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
});


module.exports = {
    query: (text, params) => pool.query(text, params),
};