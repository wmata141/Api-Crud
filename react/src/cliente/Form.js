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
    nombre: this.props.nombre,
    apellido: this.props.apellido,
    edad: this.props.edad,
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
  this.props.onSubmit(this.state);
};

  render() {
    return (
      <form>
        <div id="cliente">
          <Paper style={style.paper} zDepth={2}>
            <Subheader>{this.state.titulo}</Subheader>
            <TextField
              id="cedula"
              value={this.state.cedula}
              required="required"
              hintText="Cedula"
              floatingLabelText="Cedula"
              name="cedula"
              disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br />
            <TextField
              id="nombre"
              value={this.state.nombre}
              required="required"
              hintText="Nombre"
              floatingLabelText="Nombre"
              name="nombre"
              disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br />
            <TextField
              id="apellido"
              value={this.state.apellido}
              required="required"
              hintText="Apellido"
              floatingLabelText="Apellido"
              name="apellido"
                disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br />
            <TextField
              id="edad"
              value={this.state.edad}
              required="required"
              hintText="Edad"
              floatingLabelText="Edad"
              name="edad"
                disabled={this.props.disabled}
              onChange={e => this.change(e)}
            /><br /><br />
            <RaisedButton
              onClick={e => this.onSubmit(e)}
              label="GUARDAR"
              primary={true}
                disabled={this.props.disabled}
              style={style.button}
            />
            <Link to="/cliente"><RaisedButton
                label="REGRESAR" primary={true} style={style.button} />
            </Link>
          </Paper>
          </div>
      </form>
    );
  }
}
