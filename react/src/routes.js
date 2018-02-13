import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import App from './component/App';
import Home from './component/Home';
// Cliente
import Cliente from './component/cliente/List';
import Create from './component/cliente/Create';
import Detail from './component/cliente/Detail';
import Update from './component/cliente/Update';
// Producto
import Producto from './component/producto/List';
import CreateProducto from './component/producto/Create';
import DetailProducto from './component/producto/Detail';
import UpdateProducto from './component/producto/Update';
// Venta
import Compra from './component/venta/Compra';
import Venta from './component/venta/List';
import DetailVenta from './component/venta/Detail';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cliente" component={Cliente} />
            <Route exact path="/cliente/create" component={Create} />
            <Route exact path="/cliente/detail/:id_cliente" component={Detail} />
            <Route exact path="/cliente/update/:id_cliente" component={Update} />

            <Route exact path="/producto" component={Producto} />
            <Route exact path="/producto/create" component={CreateProducto} />
            <Route exact path="/producto/detail/:id_producto" component={DetailProducto} />
            <Route exact path="/producto/update/:id_producto" component={UpdateProducto} />

            <Route exact path="/compra/:id_cliente" component={Compra} />

            <Route exact path="/venta" component={Venta} />
            <Route exact path="/venta/detail/:id_venta" component={DetailVenta} />

            <Route component={Home} />
        </Switch>
    </App>

export default AppRoutes;
