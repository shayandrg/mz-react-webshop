import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }: any) => (
  <div>
    {products.map((product: any) => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;
