var express = require('express');
var router = express.Router();
var ventaModel = require('../models/venta');

//Todos los Ventas
router.get('/venta', function(request, response) {  
      ventaModel.getVenta(function(error, data) {
            response.status(200).json(data);
      });
});

//Venta por id
router.get('/venta/:id', function(request, response) {  
      var id = request.params.id;
      ventaModel.getVentaById(id,function(error, datos) {   
            if (typeof datos !== 'undefined' && datos.length > 0) {
              response.status(200).json(datos);
            } else {
              response.status(404).json({"Mensaje":"No existe"});
            }
      });
});

//Insertar venta
router.post('/venta', function(request, response) { 
      var datosVenta = [];
      for(var i=0; i<request.body.length; i++) {
            datosVenta[i] = {
                  id_venta : null,
                  id_cliente : 1,
                  id_producto : request.body[i].id_producto,
                  cantidad : request.body[i].stock_user
            };
      }          
      ventaModel.insertVenta(datosVenta,function(error, datos) {
            if(datos) {
                  response.status(200).json({"Mensaje":"Insertado"});
            } else {
                  response.status(500).json({"Mensaje":"Error"});
            }
      });
});

// //Modificar venta
// router.put('/venta/:id', function(request, response) {  
//       var datosVenta = {
//             id       : request.body.id_venta,
//             cedula   : request.body.cedula,
//             nombre   : request.body.nombre,
//             apellido : request.body.apellido,
//             edad     : request.body.edad
//       };
//       console.log("routes datosVenta -->", datosVenta);
//       ventaModel.updateVenta(datosVenta, function(error, datos) {
//             //si el venta se ha actualizado mostramos un mensaje         
//             if(datos && datos.mensaje) {
//                   response.status(200).json(datos);
//             } else {
//                   response.status(500).json({"mensaje":"Error"});  
//             }
//       });
// });

// //Borrar venta      
// router.delete('/venta/:id', function(request, response) {  
//       var id = request.params.id;
//       ventaModel.deleteVenta(id, function(error, datos) {
//             if(datos && datos.mensaje === "Borrado") {
//                   response.status(200).json(datos);
//             } else {
//                   response.status(500).json({"mensaje":"Error"});
//             }
//       });
// });

module.exports = router;