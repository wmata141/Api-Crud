import React, { Component } from 'react';
import Form from './Form';
import { fetchProducto, updateProducto } from './ActionProducto';

export default class Update extends Component {

constructor(props) {
  super(props);

  this.state = {
    id_producto: this.props.match.params.id_producto,
    codigo:"",
    tipo: "",
    nombre:"",
    precio:"",
    image:""
  };

  fetchProducto(this.state.id_producto)
    .then((data) => {
        this.setState(state => {
            state.codigo =data[0].codigo;
            state.tipo   =data[0].tipo;
            state.nombre =data[0].nombre;
            state.precio =data[0].precio;
            state.image  =data[0].image;
            return state;
        });
    })
    .catch((err) => {
        console.error('err', err);
    });

}

handleSubmit(data) {
  updateProducto(this.state.id_producto, data);
  window.location.href='/producto';
}


  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}
          titulo="Modificar Producto"
          id_producto={this.state.id_producto}
          codigo={this.state.codigo}
          tipo={this.state.tipo}
          nombre={this.state.nombre}
          precio={this.state.precio}
          image={this.state.image}>
        </Form>
      </div>
    );
  }
}
