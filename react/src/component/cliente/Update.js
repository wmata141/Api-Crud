import React, { Component } from 'react';
import Form from './Form';
import { fetchBlogPost, updateBlogPost } from './ActionCliente';

export default class Update extends Component {

constructor(props) {
  super(props);

  this.state = {
    id_cliente:this.props.match.params.id_cliente,
    cedula:"",
    nombre:"",
    apellido:"",
    edad:null
  };

  fetchBlogPost(this.state.id_cliente)
    .then((data) => {
        this.setState(state => {
            state.cedula=data[0].cedula;
            state.nombre=data[0].nombre;
            state.apellido=data[0].apellido;
            state.edad=data[0].edad;
            return state;
        });
    })
    .catch((err) => {
        console.error('err', err);
    });

}

handleSubmit(data) {
  updateBlogPost(this.state.id_cliente, data);
  window.location.href='/cliente';
}

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}
          titulo="Modificar Cliente"
          id_cliente={this.state.id_cliente}
          cedula={this.state.cedula}
          nombre={this.state.nombre}
          apellido={this.state.apellido}
          edad={this.state.edad}>
        </Form>
      </div>
    );
  }
}
