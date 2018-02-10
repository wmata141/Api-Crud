var express = require('express');
var router = express.Router();
var productoModel = require('../models/producto');

//Todos los Productos
router.get('/producto', function(request, response) {  
      productoModel.getProducto(function(error, data) {
            response.status(200).json(data);
      });
});

//Producto por id
router.get('/producto/:id', function(request, response) {  
      var id = request.params.id;
      productoModel.getProductoById(id,function(error, datos) {   
            if (typeof datos !== 'undefined' && datos.length > 0) {
              response.status(200).json(datos);
            } else {
              response.status(404).json({"Mensaje":"No existe"});
            }
      });
});

//Insertar producto
router.post('/producto', function(request, response) { 
      var datosProducto = {
            id_producto : null,
            codigo : request.body.codigo,
            tipo   : request.body.tipo,
            nombre : request.body.nombre,
            precio : request.body.precio,
            image  : request.body.image
      };
      productoModel.insertProducto(datosProducto,function(error, datos) {
            if(datos) {
                  response.status(200).json({"Mensaje":"Insertado"});
            } else {
                  response.status(500).json({"Mensaje":"Error"});
            }
      });
});

//Modificar producto
router.put('/producto/:id', function(request, response) {  
      var datosProducto = {
            id     : request.body.id_producto,
            codigo : request.body.codigo,
            tipo   : request.body.tipo,
            nombre : request.body.nombre,
            precio : request.body.precio,
            image  : request.body.image
      };
      productoModel.updateProducto(datosProducto, function(error, datos) {
            //si el producto se ha actualizado mostramos un mensaje         
            if(datos && datos.mensaje) {
                  response.status(200).json(datos);
            } else {
                  response.status(500).json({"mensaje":"Error"});  
            }
      });
});

//Borrar producto      
router.delete('/producto/:id', function(request, response) {  
      var id = request.params.id;
      productoModel.deleteProducto(id, function(error, datos) {
            if(datos && datos.mensaje === "Borrado") {
                  response.status(200).json(datos);
            } else {
                  response.status(500).json({"mensaje":"Error"});
            }
      });
});

module.exports = router;