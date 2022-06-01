import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [showModal, setShowModal] = useState(false);

  const showCartHandler = () => {
    setShowModal(true);
  };
  const hideCartHandler = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      {showModal && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
