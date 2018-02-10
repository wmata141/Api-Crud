var express = require('express');
var router = express.Router();
var clienteModel = require('../models/cliente');

//Todos los clientes
router.get('/cliente', function(request, response) {  
      clienteModel.getCliente(function(error, data) {
            response.status(200).json(data);
      });
});

//Cliente por id
router.get('/cliente/:id', function(request, response) {  
      var id = request.params.id;
      clienteModel.getClienteById(id,function(error, datos) {   
            if (typeof datos !== 'undefined' && datos.length > 0) {
              response.status(200).json(datos);
            } else {
              response.status(404).json({"Mensaje":"No existe"});
            }
      });
});

//Insertar cliente
router.post('/cliente', function(request, response) { 
      var datosCliente = {
            id_cliente : null,
            cedula : request.body.cedula,
            nombre : request.body.nombre,
            apellido : request.body.apellido,
            edad : request.body.edad
      };
      clienteModel.insertCliente(datosCliente,function(error, datos) {
            if(datos) {
                  response.status(200).json({"Mensaje":"Insertado"});
            } else {
                  response.status(500).json({"Mensaje":"Error"});
            }
      });
});

//Modificar cliente
router.put('/cliente/:id', function(request, response) {  
      var datosCliente = {
            id       : request.body.id_cliente,
            cedula   : request.body.cedula,
            nombre   : request.body.nombre,
            apellido : request.body.apellido,
            edad     : request.body.edad
      };
      clienteModel.updateCliente(datosCliente, function(error, datos) {
            //si el cliente se ha actualizado mostramos un mensaje         
            if(datos && datos.mensaje) {
                  response.status(200).json(datos);
            } else {
                  response.status(500).json({"mensaje":"Error"});  
            }
      });
});

//Borrar cliente      
router.delete('/cliente/:id', function(request, response) {  
      var id = request.params.id;
      clienteModel.deleteCliente(id, function(error, datos) {
            if(datos && datos.mensaje === "Borrado") {
                  response.status(200).json(datos);
            } else {
                  response.status(500).json({"mensaje":"Error"});
            }
      });
});

module.exports = router;