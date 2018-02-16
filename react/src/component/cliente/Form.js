import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  paper: { margin:20, textAlign:'center', padding: 20},
  button: { margin: 2 },
  derecha: { textAlign: 'right' }
};

export default class Form extends Component {

constructor(props) {
  super(props);

  this.state = {
    cedula: this.props.cedula,
    cedulaError: "",
    nombre: this.props.nombre,
    nombreError: "",
    apellido: this.props.apellido,
    apellidoError: "",
    edad: this.props.edad,
    edadError: "",
    titulo: this.props.titulo || "Nuevo Cliente",
  }
}

componentWillReceiveProps(props) {
  this.setState(props);
}

change(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit(e) {
  e.preventDefault();
  const err = this.validate();

  if (!err) {
    this.props.onSubmit(this.state);
  }

};

validate = () => {
    let isError = false;

    const errors = {
      cedulaError: "",
      nombreError: "",
      apellidoError: "",
      edadError: ""
    };

    if(!this.state.cedula) {
      isError = true; errors.cedulaError = "El campo no puede quedar vacio";
    } else {
      if (this.state.cedula.length < 5 || this.state.cedula.length > 10) { isError = true; errors.cedulaError = "Cedula debe contener entre 5 y 10 digitos";};
      if (isNaN(this.state.cedula)) { isError = true; errors.cedulaError = "Cedula debe contener solo digitos";};
    }
    if(!this.state.nombre) {
      isError = true; errors.nombreError = "El campo no puede quedar vacio";
    }else{
      if (this.state.nombre.length < 3 || this.state.nombre.length > 20) { isError = true; errors.nombreError = "Nombre debe contener entre 3 y 20 letras";};
      if (!isNaN(this.state.nombre)) { isError = true; errors.nombreError = "Nombre debe contener solo letras";};
    }
    if(!this.state.apellido) {
      isError = true; errors.apellidoError = "El campo no puede quedar vacio";
    }else{
      if (this.state.apellido.length < 3 || this.state.apellido.length > 20) { isError = true; errors.apellidoError = "apellido debe contener entre 3 y 20 letras";};
      if (!isNaN(this.state.apellido)) { isError = true; errors.apellidoError = "Apellido debe contener solo letras";};
    }
    if(!this.state.edad) {
      isError = true; errors.edadError = "El campo no puede quedar vacio";
    }else{
      if (this.state.edad < 10 || this.state.edad > 99) { isError = true; errors.edadError = "Edad debe estar entre 10 y 99 años";};
      if (isNaN(this.state.edad)) { isError = true; errors.edadError = "Edad debe contener solo digitos";};
    }

      this.setState({
        ...this.state,
        ...errors
      });

    return isError;
  };

  render() {
    return (
      <form>
        <div id="cliente">
          <Paper style={style.paper} zDepth={2}>
            <Subheader><b>{this.state.titulo}</b></Subheader>
            <TextField
              id="cedula"
              value={this.state.cedula}
              errorText={this.state.cedulaError}
              hintText="Cedula"
              floatingLabelText="Cedula"
              name="cedula"
              disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br />
            <TextField
              id="nombre"
              value={this.state.nombre}
              errorText={this.state.nombreError}
              hintText="Nombre"
              floatingLabelText="Nombre"
              name="nombre"
              disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br />
            <TextField
              id="apellido"
              value={this.state.apellido}
              errorText={this.state.apellidoError}
              hintText="Apellido"
              floatingLabelText="Apellido"
              name="apellido"
              disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br />
            <TextField
              id="edad"
              value={this.state.edad}
              errorText={this.state.edadError}
              hintText="Edad"
              floatingLabelText="Edad"
              name="edad"
              disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br /><br />
            <Link to="/cliente">
              <RaisedButton
                onClick={e => this.onSubmit(e)}
                label="GUARDAR"
                primary={true}
                disabled={this.props.disabled}
                style={style.button}
              />
            </Link>
            <Link to="/cliente"><RaisedButton
                label="REGRESAR" primary={true} style={style.button} />
            </Link>
          </Paper>
          </div>
      </form>
    );
  }
}
