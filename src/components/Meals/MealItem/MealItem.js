import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const { id, name, description, price } = props.meal;

  const formattedPrice = `$${price.toFixed(2)}`;

  const ctx = useContext(CartContext);

  const addItemHandler = (amount) => {
    ctx.addItem({ id: id, name: name, price: price, amount: amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAdd={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
