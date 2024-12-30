// Paso 1: Importar librerias

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Paso 2: Obtener una referencia al div con id root

const el = document.getElementById("root")

// Paso 3: Le decimos a React que tome el control del elemento

const root = ReactDOM.createRoot(el)

// 5 Paso: Mostrar el componente en pantalla

root.render(<App/>)