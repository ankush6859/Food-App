import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const { onClose } = props;

  const [isCheckout, setIsCheckout] = useState(false);
  const ctx = useContext(CartContext);
  const totalAmount = '$' + ctx.totalAmount.toFixed(2);

  const addItemHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };

  const submitHandler = (userData) => {
    fetch(
      'https://react-http-179bf-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: ctx.items,
        }),
      }
    );
    onClose();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <CartItem
          item={item}
          onAdd={() => addItemHandler(item)}
          onRemove={() => removeItemHandler(item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onSubmit={submitHandler} onClose={onClose} />}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={onClose}>
            Close
          </button>
          {ctx.items.length > 0 && (
            <button
              className={classes.button}
              onClick={() => setIsCheckout(true)}
            >
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
