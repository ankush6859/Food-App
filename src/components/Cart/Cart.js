import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const { onClose } = props;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: '1', name: 'Sushi', amount: '2', price: 12.99 }].map((dish) => (
        <li>{dish.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>34.43</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
