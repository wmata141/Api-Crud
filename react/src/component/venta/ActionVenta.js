import axios from 'axios';

export function loadVentas() {
    return dispatch => {
      return axios.get("/venta")
      .then(response => {
        dispatch({
          type: "REPLACE_VENTAS",
          products: response.data
        })
      });
    };
}

export function createBlogPost(data) {
    return fetch("/cliente", {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.status === 200) {
          window.alert('CREATE CLIENTE SUCCESSFUL');
          return res;
        } else {
          window.alert('ERROR CREATE');
        }
    }).catch(err => {
        console.error(err);
    });
}

export function addToCompra(cart) {
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
