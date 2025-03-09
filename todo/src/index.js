import React from 'react';
import ReactDOM from 'react-dom/client'; // Change import
import App from './App';

// Bootstrap CSS
import 'bootswatch/dist/sketchy/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
