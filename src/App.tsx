import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Modal from './components/Modal';
import products from './data/products.json';
import './App.css'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product: any) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="webshop">
      <header>
        <h1>The Magic Store</h1>
      </header>
      <SearchBar onSearch={setSearchQuery} />
      <main>
        <div className="search-results">
          <h2>Search Result</h2>
          <ProductList products={filteredProducts} addToCart={addToCart} />
        </div>
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>
          <Cart cartItems={cart} removeFromCart={removeFromCart} />
        </div>
      </main>
    </div>
  );
};

export default App;
