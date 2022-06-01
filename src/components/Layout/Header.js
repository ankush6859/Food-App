import React, { useState } from 'react';
import mainMeal from '../../assets/images/meals.jpg';
import Cart from '../Cart/Cart';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mainMeal} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
