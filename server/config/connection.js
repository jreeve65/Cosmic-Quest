const { connect, connection } = require('mongoose');
require('dotenv').config();
const connectionString = process.env.DB_LINK;

connect(connectionString);

module.exports = connection;
