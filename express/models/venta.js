var connection = require('../models/connection');

var venta = {};
 
//Obtenemos todos los venta
venta.getVenta = function(callback) {
	if (connection)	{
		connection.query('SELECT *FROM venta', function(error, rows) {
			if(error) {
				throw error;
			} else {
				callback(null, rows);
			}
		});
	}
}
 
//Obtenemos un Venta por su id
venta.getVentaById = function(id,callback) {
	if (connection) {
		var sql = 'SELECT *FROM venta WHERE id_venta =' + connection.escape(id);
		connection.query(sql, function(error, row) {
			if(error) {
				throw error;
			} else {
				callback(null, row);
			}
		});
	}
}

//Añadir un nuevo Venta
venta.insertVenta = function(VentaData,callback) {
	if (connection) {			
		connection.query('INSERT INTO venta SET ?', VentaData, function(error, result) {
			if(error) {
				throw error;
			} else {
				//insertamos el resto con el id de Venta insertado			
				for(var i=1; i<VentaData.length; i++) {
					VentaData[i].id_venta = result.insertId;
					connection.query('INSERT INTO venta SET ?', VentaData[i]);
				}
				//devolvemos el id de Venta insertado	
				callback(null, result.insertId);
			}
		});
	}
}
 
// //Actualizar una Venta
// venta.updateVenta = function(datosVenta, callback) {
// 	if(connection) {
// 		var sql = ' UPDATE venta SET';
// 			sql+= ' cedula   ='+ connection.escape(datosVenta.cedula);
// 			sql+= ',nombre   ='+ connection.escape(datosVenta.nombre);
// 			sql+= ',apellido ='+ connection.escape(datosVenta.apellido);
// 			sql+= ',edad     ='+ connection.escape(datosVenta.edad); 
// 			sql+= ' WHERE id_Venta = ' + datosVenta.id;
// 		connection.query(sql, function(error, result) {
// 			if(error){
// 				throw error;
// 			} else {
// 				callback(null,{"mensaje":"Actualizado"});
// 			}
// 		});
// 	}
// }
 
// //Eliminar una Venta por su id
// venta.deleteVenta = function(id, callback) {
// 	if(connection) {
// 		var sql = 'DELETE FROM venta WHERE id_Venta =' + connection.escape(id);
// 		connection.query(sql, function(error, result) {
// 			if(error) {
// 				throw error;
// 			} else {
// 				callback(null,{"mensaje":"Borrado"});
// 			}
// 		});
// 	}			
// }

module.exports = venta;