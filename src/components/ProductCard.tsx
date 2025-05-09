interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
  onProductSelect: (product: Product) => void;
}

const ProductCard = ({ product, addToCart, onProductSelect }: ProductCardProps) => (
    <div className="product-card">
        <img 
            src={product.image} 
            alt={product.name} 
            onClick={() => onProductSelect(product)}
            style={{ cursor: 'pointer' }}
        />
        <h3 onClick={() => onProductSelect(product)} style={{ cursor: 'pointer' }}>
            {product.name}
        </h3>
        <div>
        <p>{product.price} SEK</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    </div>
);

export default ProductCard;
