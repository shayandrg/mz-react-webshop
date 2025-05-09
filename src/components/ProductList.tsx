import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
  onProductSelect: (product: Product) => void;
}

const ProductList = ({ products, addToCart, onProductSelect }: ProductListProps) => (
  <div>
    {products.map((product) => (
      <ProductCard 
        key={product.id} 
        product={product} 
        addToCart={addToCart} 
        onProductSelect={onProductSelect}
      />
    ))}
  </div>
);

export default ProductList;
