import fetch from 'isomorphic-fetch';
import axios from 'axios';

export function fetchBlogPost(id) {
    return fetch("/producto/" + id, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}

export function loadProducts() {
    return dispatch => {
      return axios.get("/producto")
      .then(response => {
        dispatch({
          type: "REPLACE_PRODUCTS",
          products: response.data
        })
      });
    };
};

const removeFromCart = product => {
    return dispatch => {
      return fetch("/producto/" + product.id_producto, {
          method: 'DELETE',
          mode: 'CORS'
      }).then(res => {
          dispatch({
            type: "REMOVE_PRODUCTS",
            product
        })
      });
    };
};

export function createBlogPost(data) {
    return fetch("/producto", {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.status === 200) {
          window.alert('CREATE PRODUCTO SUCCESSFUL');
          return res;
        } else {
          window.alert('ERROR CREATE');
        }
    }).catch(err => {
        console.error(err);
    });
}

export function updateBlogPost(id, data) {
    return fetch("/producto/" + id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("res.status ActionCliente",res.status);
        if(res.status === 200) {
          window.alert('UPDATE CLIENTE SUCCESSFUL');
          return res;
        } else {
          window.alert('ERROR UPDATE');
        }
    }).catch(err => {
        console.error(err);
    });
}

const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        product
    }
};

export {
  // loadProducts,
  // fetchBlogPost,
  addToCart,
  removeFromCart
};
