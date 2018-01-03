var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'empresa'
});
 
connection.connect(function(err) {
  if (err) throw err
  console.log('Conexion Exitosa a la Base de Datos');
})

module.exports = connection;