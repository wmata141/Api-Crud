import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const products = (state=[], action) => {
  switch(action.type) {
    case "REPLACE_PRODUCTS":
       return action.products;

    case "REMOVE_PRODUCTS":
      return state.filter(product => product.id_producto !== action.product.id_producto);

    case "SELECT_PRODUCTS":
      return action.products;

   default:
    return state;
  }
};

const ventas = (state=[], action) => {
  switch(action.type) {
    case "REPLACE_VENTAS":
       return action.ventas;

    case "ADD_VENTAS":
      return state.concat(action.ventas);

    case "SELECT_VENTAS":
      return action.ventas;

   default:
    return state;
  }
};

const cart = (state=[], action) => {
  switch(action.type) {
    case "ADD_TO_CART":
       let existe = state.indexOf(action.product);
       if(existe !== -1){
         action.product.stock_user += 1;
         return state.concat();
       } else {
         action.product['stock_user'] = 1;
         return state.concat(action.product);
       }

    case "REMOVE_FROM_CART":
      return state.filter(product => product.id_producto !== action.product.id_producto);

    case "ADD_TO_COMPRA":
      state.length=0;
      return state.concat();

   default:
    return state;
  }
};



const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default createStore(combineReducers({cart, products, ventas}), applyMiddleware(logger, thunk));
