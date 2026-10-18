const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config.db);

pool.on('error', (err) => {
  console.error('Unexpected PostgreSQL error', err);
});

async function query(text, params) {
  return pool.query(text, params);
}

module.exports = {
  query,
  pool
};
