var connection = require('../models/connection');

var cliente = {};
 
//Obtenemos todos los cliente
cliente.getCliente = function(callback) {
	if (connection)	{
		connection.query('SELECT *FROM cliente', function(error, rows) {
			if(error) {
				throw error;
			} else {
				callback(null, rows);
			}
		});
	}
}
 
//Obtenemos un Cliente por su id
cliente.getClienteById = function(id,callback) {
	if (connection) {
		var sql = 'SELECT *FROM cliente WHERE id_cliente =' + connection.escape(id);
		connection.query(sql, function(error, row) {
			if(error) {
				throw error;
			} else {
				callback(null, row);
			}
		});
	}
}

//Añadir un nuevo Cliente
cliente.insertCliente = function(ClienteData,callback) {
	if (connection) {
		connection.query('INSERT INTO cliente SET ?', ClienteData, function(error, result) {
			if(error) {
				throw error;
			} else {
				//devolvemos el id del Cliente insertado
				callback(null, result.insertId);				
			}
		});
	}
}
 
//Actualizar un Cliente
cliente.updateCliente = function(datosCliente, callback) {
	if(connection) {
		var sql = ' UPDATE cliente SET';
			sql+= ' cedula   ='+ connection.escape(datosCliente.cedula);
			sql+= ',nombre   ='+ connection.escape(datosCliente.nombre);
			sql+= ',apellido ='+ connection.escape(datosCliente.apellido);
			sql+= ',edad     ='+ connection.escape(datosCliente.edad); 
			sql+= ' WHERE id_cliente = ' + datosCliente.id;
		connection.query(sql, function(error, result) {
			if(error){
				throw error;
			} else {
				callback(null,{"mensaje":"Actualizado"});
			}
		});
	}
}
 
//Eliminar un Cliente por su id
cliente.deleteCliente = function(id, callback) {
	if(connection) {
		var sql = 'DELETE FROM cliente WHERE id_cliente =' + connection.escape(id);
		connection.query(sql, function(error, result) {
			if(error) {
				throw error;
			} else {
				callback(null,{"mensaje":"Borrado"});
			}
		});
	}			
}

module.exports = cliente;