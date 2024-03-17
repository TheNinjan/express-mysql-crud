const mysql = require('mysql2')


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'rent_cars'
})

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Connected to MySQL database');
});

module.exports = connection;