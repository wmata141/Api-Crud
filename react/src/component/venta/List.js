import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {
  Table,
  TableHeader,
  TableBody,
  TableHeaderColumn,
  TableRowColumn,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { Button, Glyphicon } from 'react-bootstrap';
// Colors
import {blue500, cyan500, pinkA200} from 'material-ui/styles/colors';
// Button
import EyeIcon from 'material-ui/svg-icons/image/remove-red-eye';

import { fetchBlogPost } from './ActionVenta';

const style = {
  products: {display: 'flex',alignItems: 'stretch',flexWrap: 'wrap'},
  product: {width: '140px'},
  paper: { margin:20, textAlign:'center'},
  derecha: { textAlign: 'right' }
};

const List = ({ products, fetchBlogPost }) => {

  const emptyMessage = (
    <Paper style={style.paper} zDepth={2}>
    <Table>
      <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
      >
      <TableRow>
        <TableHeaderColumn style={style.derecha} colSpan="6" >
          <ToolbarGroup>
            <ToolbarTitle text="VENTAS" />
            <Link to="/"><RaisedButton
                label="SALIR" primary={true} />
            </Link>
          </ToolbarGroup>
        </TableHeaderColumn >
      </TableRow>
      </TableHeader>
    </Table>
    <h1>There are no ventas yet in your collection</h1>
    </Paper>
  );

  const productsList = (
    <div className="Venta">
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
          <ToolbarTitle text="Ventas" />
          <Link to="/"><RaisedButton
              label="SALIR" primary={true} />
          </Link>
      </ToolbarGroup>
      </TableHeaderColumn>
    </TableRow>
    <TableRow>
      <TableHeaderColumn tooltip="Identificador">Factura</TableHeaderColumn>
      <TableHeaderColumn tooltip="Cliente">Cliente</TableHeaderColumn>
      <TableHeaderColumn tooltip="Productos">Productos</TableHeaderColumn>
      <TableHeaderColumn tooltip="Fecha">Fecha</TableHeaderColumn>
      <TableHeaderColumn></TableHeaderColumn>
    </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
      deselectOnClickaway={false}
      showRowHover={true}
      stripedRows={true}
    >
    {products.map(product =>
      <TableRow key={product.id_producto} selectable={false}>
        <TableRowColumn>{product.id_producto}</TableRowColumn>
        <TableRowColumn>{product.nombre}</TableRowColumn>
        <TableRowColumn>{product.cantidad}</TableRowColumn>
        <TableRowColumn>{product.fecha}</TableRowColumn>
        <TableRowColumn>

          <Link to={`/venta/detail/${product.id_venta}`}><EyeIcon
            color={blue500} hoverColor={cyan500}/>
          </Link>
        </TableRowColumn>
      </TableRow>
    )}
    </TableBody>
    </Table>
    </Paper>
    </div>
  );

  return (
    <div>
      {products.length === 0 ? emptyMessage : productsList}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
    // ventas: state.ventas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBlogPost(product) {
      dispatch(fetchBlogPost(product));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (List);
