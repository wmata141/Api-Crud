import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Estilos.css';
// Routes
import AppRoutes from './routes'
// Component
import registerServiceWorker from './registerServiceWorker';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadProducts } from './component/producto/ActionProducto';
import { loadVentas } from './component/venta/ActionVenta';

store.dispatch(loadProducts());
store.dispatch(loadVentas());

render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
