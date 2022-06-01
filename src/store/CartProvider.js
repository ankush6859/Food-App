import { useReducer } from 'react';
import CartContext from './cart-context';

const cartInitialState = {
  items: [],
  totalAmount: '',
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  const addItemToCartHandler = (item) => {
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
