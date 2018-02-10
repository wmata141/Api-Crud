var connection = require('../models/connection');

var producto = {};
 
//Obtenemos todos los Producto
producto.getProducto = function(callback) {
	if (connection)	{
		connection.query('SELECT *FROM producto', function(error, rows) {
			if(error) {
				throw error;
			} else {
				callback(null, rows);
			}
		});
	}
}
 
//Obtenemos un Producto por su id
producto.getProductoById = function(id,callback) {
	if (connection) {
		var sql = 'SELECT *FROM producto WHERE id_producto =' + connection.escape(id);
		connection.query(sql, function(error, row) {
			if(error) {
				throw error;
			} else {
				callback(null, row);
			}
		});
	}
}

//Añadir un nuevo Producto
producto.insertProducto = function(ProductoData,callback) {
	if (connection) {
		connection.query('INSERT INTO producto SET ?', ProductoData, function(error, result) {
			if(error) {
				throw error;
			} else {
				//devolvemos el id del Producto insertado
				callback(null, result.insertId);				
			}
		});
	}
}
 
//Actualizar un Producto
producto.updateProducto = function(datosProducto, callback) {
	if(connection) {
		var sql = ' UPDATE producto SET';
			sql+= ' codigo   ='+ connection.escape(datosProducto.codigo);
			sql+= ',tipo   ='+ connection.escape(datosProducto.tipo);
			sql+= ',nombre ='+ connection.escape(datosProducto.nombre);
			sql+= ',precio     ='+ connection.escape(datosProducto.precio); 
			sql+= ',image     ='+ connection.escape(datosProducto.image); 
			sql+= ' WHERE id_producto = ' + datosProducto.id;		
		connection.query(sql, function(error, result) {
			if(error){
				throw error;
			} else {
				callback(null,{"mensaje":"Actualizado"});
			}
		});
	}
}
 
//Eliminar un Producto por su id
producto.deleteProducto = function(id, callback) {
	if(connection) {
		var sql = 'DELETE FROM producto WHERE id_producto =' + connection.escape(id);
		connection.query(sql, function(error, result) {
			if(error) {
				throw error;
			} else {
				callback(null,{"mensaje":"Borrado"});
			}
		});
	}			
}

module.exports = producto;