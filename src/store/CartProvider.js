import { useReducer } from 'react';
import CartContext from './cart-context';

const cartInitialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const index = state.items.findIndex((item) => item.id === action.item.id);
    let updatedItems;

    if (index !== -1) {
      updatedItems = state.items;
      updatedItems[index].amount += action.item.amount;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      Number(state.totalAmount) +
      Number(action.item.price) * Number(action.item.amount);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === 'REMOVE_ITEM') {
    const index = state.items.findIndex((item) => item.id === action.id);

    const existingItem = state.items[index];
    const amountOfItem = +existingItem.amount;
    state.items.splice(index, 1);

    const updatedTotalAmount =
      Number(state.totalAmount) - Number(existingItem.price);

    if (amountOfItem > 1) {
      existingItem.amount -= 1;
      state.items.splice(index, 0, existingItem);
    }
    return {
      items: state.items,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  const addItemToCartHandler = (item) => {
    console.log('item', 'item');
    cartDispatch({ type: 'ADD_ITEM', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    cartDispatch({ type: 'REMOVE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
