import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart, addToCompra } from './ActionVenta';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

const ShoppingCart = ({ cart, removeFromCart, addToCompra, id_cliente }) => {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {cart.map(product =>
              <tr key={id_cliente}>
                <td>{product.nombre}</td>
                <td className="text-right">${product.precio}</td>
                <td className="text-right">
                  #{product.stock_user}
                </td>
                <td className="text-right">
                  <Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="1" style={styles.footer}>
                Total: ${cart.reduce((sum, product) => sum + product.precio * product.stock_user, 0)}
              </td>
              <td></td>
              <td style={styles.footer} className="text-right">
                Total: #{cart.reduce((sum, product) => sum + product.stock_user, 0)}
              </td>
              <td  className="text-right"><Link to="/venta"><Button bsSize="xsmall" bsStyle="success" onClick={() => addToCompra(cart)} ><Glyphicon glyph="shopping-cart" /></Button></Link></td>
            </tr>
          </tfoot>
        </Table>
      </Panel>
    );
  }

const mapStateToProps = state => {
  return {
    cart: state.cart,
    id_cliente: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    },
    addToCompra(cart) {
      dispatch(addToCompra(cart));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ShoppingCart);
