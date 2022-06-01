import React from 'react';
import mainMeal from '../../assets/images/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mainMeal} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
