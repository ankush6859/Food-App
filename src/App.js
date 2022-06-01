import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [showModal, setShowModal] = useState(false);

  const showCartHandler = () => {
    setShowModal(true);
  };
  const hideCartHandler = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      {showModal && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
