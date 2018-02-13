import axios from 'axios';

export function loadVentas() {
    return dispatch => {
      return axios.get("/venta")
      .then(response => {
        dispatch({
          type: "REPLACE_VENTAS",
          ventas: response.data
        })
      });
    };
}

export function addToCompra(cart, id) {
  // Objeto el cual se añadira a cart con el id_venta
  var objeto = {
    id_cliente: id
  }
  cart.push(objeto);

  return dispatch => {
    fetch("/venta", {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(cart),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
      dispatch({
        type: "ADD_TO_COMPRA",
        cart
      })
    });
  };
};

export function fetchBlogPost(id) {
    return fetch("/venta/" + id, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}

const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        product
    }
};

const removeFromCart = product => {
    return {
        type: "REMOVE_FROM_CART",
        product
    }
};

export {
  // loadProducts,
  addToCart,
  removeFromCart,
  // addToCompra
};
