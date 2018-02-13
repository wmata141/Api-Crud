import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from './ActionVenta';
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '120px',
    marginLeft: 10,
    marginRight: 10
  }
};

class ProductList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.products}>
        {this.props.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id_cliente}>
            <div className="panel-heading">
              <h4 className="panel-title">{product.nombre}</h4>
            </div>
            <img src={product.image} alt={product.nombre} />
            <div className="caption">
              <div className="panel-footer">
              <p>
                <Button bsStyle="primary" onClick={() => this.props.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.precio} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart(product) {
      dispatch(addToCart(product));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductList);
