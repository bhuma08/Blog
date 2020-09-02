const index = `SELECT * FROM posts`;
const show = `SELECT * FROM posts WHERE id = $1`;
const create = `INSERT INTO posts (author, title, entry) VALUES ($1, $2, $3) RETURNING *`;


module.exports = { index, show, create };