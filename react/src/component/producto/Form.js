import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  paper: { margin:20, textAlign:'center', padding: 10},
  button: { margin: 2 },
  product: { width: '100px', marginLeft: 10, marginRight: 10 },
  cuadro: { height: 100, width: 100, margin: 20, textAlign: 'center', display: 'inline-block'},
};

export default class Form extends Component {

constructor(props) {
  super(props);

  this.state = {
    codigo: this.props.codigo,
    codigoError: "",
    tipo: this.props.tipo,
    tipoError: "",
    nombre: this.props.nombre,
    nombreError: "",
    precio: this.props.precio,
    precioError: "",
    image: this.props.image,
    imageError: "",
    titulo: this.props.titulo || "Nuevo Producto",
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
      codigoError: "",
      tipoError: "",
      nombreError: "",
      precioError: "",
    };
    if(!this.state.codigo) {
      isError = true; errors.codigoError = "El campo no puede quedar vacio";
    } else {
      if (this.state.codigo.length < 1 || this.state.codigo.length > 10) { isError = true; errors.codigoError = "codigo debe contener entre 5 y 10 caracteres";};
    }
    if(!this.state.tipo) {
      isError = true; errors.tipoError = "El campo no puede quedar vacio";
    }else{
      if (this.state.tipo.length < 1 || this.state.tipo.length > 20) { isError = true; errors.tipoError = "tipo debe contener entre 3 y 20 letras";};
      if (!isNaN(this.state.tipo)) { isError = true; errors.tipoError = "tipo debe contener solo letras";};
    }
    if(!this.state.nombre) {
      isError = true; errors.nombreError = "El campo no puede quedar vacio";
    }else{
      if (this.state.nombre.length < 1 || this.state.nombre.length > 20) { isError = true; errors.nombreError = "Nombre debe contener entre 3 y 20 letras";};
      if (!isNaN(this.state.nombre)) { isError = true; errors.nombreError = "Nombre debe contener solo letras";};
    }
    if(!this.state.precio) {
      isError = true; errors.precioError = "El campo no puede quedar vacio";
    }else{
      if (this.state.precio < 1 ) { isError = true; errors.precioError = "precio debe ser mayor que 0 ";};
      if (isNaN(this.state.precio)) { isError = true; errors.precioError = "precio debe contener solo digitos";};
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
        <div id="producto">
          <Paper style={style.paper} zDepth={2}>
            <Subheader><b>{this.state.titulo}</b></Subheader>
            <TextField
              id="codigo"
              value={this.state.codigo}
              errorText={this.state.codigoError}
              hintText="Codigo"
              floatingLabelText="Codigo"
              name="codigo"
              disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br />
            <TextField
              id="tipo"
              value={this.state.tipo}
              errorText={this.state.tipoError}
              hintText="Tipo"
              floatingLabelText="Tipo"
              name="tipo"
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
              id="precio"
              value={this.state.precio}
              errorText={this.state.precioError}
              hintText="Precio"
              floatingLabelText="Precio"
              name="precio"
              disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br />
            <TextField
              id="image"
              value={this.state.image}
              hintText="Imagen"
              floatingLabelText="Imagen"
              name="image"
              disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br />
            <Paper style={style.cuadro}>
              <div className="thumbnail">
                {this.state.image !== '' && <img src={this.state.image} alt={this.image} />}
              </div>
            </Paper>
            <br />
            <RaisedButton
              onClick={e => this.onSubmit(e)}
              label="GUARDAR"
              primary={true}
              disabled={this.props.disabled}
              style={style.button}
            />
            <Link to="/producto"><RaisedButton
                label="REGRESAR" primary={true} style={style.button} />
            </Link>
          </Paper>
          </div>
      </form>
    );
  }
}
