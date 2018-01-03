import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

import { createBlogPost } from './Action';

const style = {
  paper: { margin:20, textAlign:'center', padding: 20},
  button: { margin: 2 },
  derecha: { textAlign: 'right' }
};

export default class Create extends Component {

  state = {
    cedula: "",
    nombre: "",
    apellido: "",
    edad: "",
  }

change = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = e => {
  e.preventDefault();
  createBlogPost(this.state);
};

  render() {
      return (
        <div>
          <form>
            <div id="cliente">
            <Paper style={style.paper} zDepth={2}>
              <Subheader>Nuevo Cliente</Subheader>
              <TextField
                name="cedula"
                required="required"
                hintText="Cedula"
                floatingLabelText="Cedula"
                onChange={e => this.change(e)}
              /><br />
              <TextField
                name="nombre"
                required="required"
                hintText="Nombre"
                floatingLabelText="Nombre"
                onChange={e => this.change(e)}
              /><br />
              <TextField
                name="apellido"
                required="required"
                hintText="Apellido"
                floatingLabelText="Apellido"
                onChange={e => this.change(e)}
              /><br />
              <TextField
                name="edad"
                required="required"
                hintText="Edad"
                floatingLabelText="Edad"
                onChange={e => this.change(e)}
              /><br /><br />

              <RaisedButton
                onClick={e => this.onSubmit(e)}
                label="GUARDAR"
                primary={true}
                style={style.button}
              />
              <Link to="/cliente"><RaisedButton
                  label="REGRESAR" primary={true} style={style.button} />
              </Link>
            </Paper>
            </div>
        </form>
      </div>
    );
  }
}
