import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import App from './component/App';
import Home from './component/Home';
import Producto from './component/Producto';
import Venta from './component/Venta';
// Cliente
import List from './cliente/List';
import Create from './cliente/Create';
import Update from './cliente/Update';
import Detail from './cliente/Detail';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cliente" component={List} />
            <Route exact path="/cliente/create" component={Create} />
            <Route exact path="/cliente/update/:id_cliente" component={Update} />
            <Route exact path="/cliente/detail/:id_cliente" component={Detail} />
            <Route exact path="/producto" component={Producto} />
            <Route exact path="/venta" component={Venta} />
            <Route component={Home} />
        </Switch>
    </App>

export default AppRoutes;
