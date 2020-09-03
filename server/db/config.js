const { Pool } = require("pg");

const pool = new Pool({ 
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

function run(q, values, callback){
    return pool.query(q, values, callback);
};

module.exports = { run };