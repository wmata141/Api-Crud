import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
// Colors
import {blue500, cyan500, pinkA200} from 'material-ui/styles/colors';
// Button
import EditIcon from 'material-ui/svg-icons/image/edit';
import TrashIcon from 'material-ui/svg-icons/action/delete';
import EyeIcon from 'material-ui/svg-icons/image/remove-red-eye';
import ShoppingCar  from 'material-ui/svg-icons/action/shopping-cart';

const style = {
  paper: { margin:20, textAlign:'center'},
  izquierda: { textAlign: 'left' },
  derecha: { textAlign: 'right' }
};

export default class Tables extends Component {

  deleteHandler(i, e) {
    e.preventDefault();
    this.props.onDelete(this.props.blogPosts[i].id_cliente);
  };

  render() {
    return (
      <div className="Cliente">
      <Paper style={style.paper} zDepth={2}>
      <Table
          fixedHeader={true}
          fixedFooter={true}
          selectable={true}
          multiSelectable={false}
      >
      <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}
      >
      <TableRow>
        <TableHeaderColumn colSpan="6" style={style.derecha}>
        <ToolbarGroup>
            <ToolbarTitle text="CLIENTES" />
            <Link to="/cliente/create"><RaisedButton
                label="NUEVO CLIENTE" primary={true} />
            </Link>
        </ToolbarGroup>
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn tooltip="Identificador">ID</TableHeaderColumn>
        <TableHeaderColumn tooltip="Cedula">Cedula</TableHeaderColumn>
        <TableHeaderColumn tooltip="Nombre">Nombre</TableHeaderColumn>
        <TableHeaderColumn tooltip="Apellido">Apellido</TableHeaderColumn>
        <TableHeaderColumn tooltip="Edad">Edad</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        deselectOnClickaway={false}
        showRowHover={true}
        stripedRows={true}
      >
      {this.props.blogPosts && this.props.blogPosts.map((x, i) => {
            return (
              <TableRow key={x.id_cliente} selectable={false}>
                <TableRowColumn>{x.id_cliente}</TableRowColumn>
                <TableRowColumn>{x.cedula}</TableRowColumn>
                <TableRowColumn>{x.nombre}</TableRowColumn>
                <TableRowColumn>{x.apellido}</TableRowColumn>
                <TableRowColumn>{x.edad}</TableRowColumn>
                <TableRowColumn>
                <Link to={`/compra/${x.id_cliente}`}><ShoppingCar
                    color={cyan500} hoverColor={pinkA200}/>
                  </Link>
                  <Link to={`/cliente/detail/${x.id_cliente}`}><EyeIcon
                    color={blue500} hoverColor={cyan500}/>
                  </Link>
                  <Link to={`/cliente/update/${x.id_cliente}`}><EditIcon
                    color={blue500} hoverColor={cyan500}/>
                  </Link>
                  <TrashIcon onClick={this.deleteHandler.bind(this, i)} color={blue500} hoverColor={cyan500}/>
                </TableRowColumn>
              </TableRow>
            )})}
      </TableBody>
      </Table>
      </Paper>
      </div>
    );
  }
}
