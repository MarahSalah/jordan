const { Pool } = require('pg');
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const pool = new Pool({
    user: 'postgres',
    password: '359157',
    host: 'localhost',
    port: 5432,
    database: 'Tourism'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};