// services.js
export const getProducts = () => {
    return Promise.resolve([
        { id: 1, name: 'Producto 1', description: 'Descripción 1' },
        { id: 2, name: 'Producto 2', description: 'Descripción 2' },
    ]);
    };
    
    export const getProductById = (id) => {
    return Promise.resolve(
        { id: 1, name: 'Producto 1', description: 'Descripción 1' }
    );
    };