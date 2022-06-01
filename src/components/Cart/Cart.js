import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const { onClose } = props;

  const ctx = useContext(CartContext);
  const totalAmount = '$' + ctx.totalAmount.toFixed(2);

  const addItemHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
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
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {ctx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
