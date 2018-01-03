import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Estilos.css';
// Routes
import AppRoutes from './routes'
// Component
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
