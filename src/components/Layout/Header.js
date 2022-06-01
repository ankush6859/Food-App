import React from 'react';
import mainMeal from '../../assets/images/meals.jpg';
import CartContext from '../../store/cart-context';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  const { onShowCart } = props;

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mainMeal} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
