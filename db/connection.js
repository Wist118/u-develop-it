const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MY MySQL username
        user: 'root',
        // MY SQL PASSWORD
        password: 'Crankybabycasey18@',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;