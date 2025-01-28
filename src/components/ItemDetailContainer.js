import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
    getProductById(id).then(data => setProduct(data));
    }, [id]);

    return (
    <div>
        {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
    );
};

export default ItemDetailContainer;