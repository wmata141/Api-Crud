var connection = require('../models/connection');

var venta = {};
 
//Obtenemos todos los venta
venta.getVenta = function(callback) {
	if (connection)	{		
		var sql = 'SELECT (SELECT nombre FROM cliente WHERE id_cliente=venta.id_cliente) AS nombre_cliente,id_venta,fecha FROM venta'
		connection.query(sql, function(error, rows) {
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
		var sql = 'SELECT (SELECT nombre FROM producto WHERE id_producto=venta_detalle.id_producto) AS nombre_producto, cantidad, id_producto FROM venta_detalle WHERE id_venta =' + connection.escape(id);
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
		var venta = [];			
		venta = {
			id_venta: null,
			id_cliente: VentaData[0].id_cliente
		}
		connection.query('INSERT INTO venta SET ?', venta, function(error, result) {
			if(error) {
				throw error;
			} else {
				//insertamos el resto con el id de Venta insertado	
				var venta_detalle = [];			
				for(var i=0; i<VentaData.length; i++) {
					venta_detalle[i] = {
						id_venta: result.insertId,
						id_producto: VentaData[i].id_producto,
						cantidad: VentaData[i].cantidad
					}				
					connection.query('INSERT INTO venta_detalle SET ?', venta_detalle[i]);
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