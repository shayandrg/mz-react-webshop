import React from 'react';

const ProductCard = ({ product, addToCart }: any) => (
    <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div>
        <p>{product.price} SEK</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    </div>
);

export default ProductCard;
