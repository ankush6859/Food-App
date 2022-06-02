import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const { onClick } = props;
  const ctx = useContext(CartContext);
  const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);
  const { items, totalAmount } = ctx;

  const numberOfCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    buttonIsHighLighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighLighted(true);

    let timeoutId = setTimeout(() => {
      setButtonIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [totalAmount]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
