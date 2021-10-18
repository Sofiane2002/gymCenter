const { Pool } = require('pg');

// pour se connecter sur Heroku décommenter
// pour se connecter en local commenter

const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL ? false : true
});

module.exports = pool;