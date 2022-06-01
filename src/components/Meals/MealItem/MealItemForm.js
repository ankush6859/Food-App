import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, onAdd }) => {
  const inputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +inputRef.current.value;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAdd(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
