import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';; // Asegúrate de tener un archivo CSS para los estilos

// Obtén una referencia al div con id root
const el = document.getElementById('root');

// Le decimos a React que tome el control del elemento
const root = ReactDOM.createRoot(el);

// Renderizamos la aplicación
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);