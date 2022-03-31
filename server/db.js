const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.User,
    password:  process.env.Password,
    host:  process.env.Host,
    port:  process.env.Port,
    database:  process.env.Database
});

module.exports = pool;