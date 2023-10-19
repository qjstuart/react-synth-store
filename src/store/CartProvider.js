import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // It's important to check whether item being added already exists.
    // The findIndex() function is like find(). It stops when a match is
    // found but returns index instead of element. Returns -1 upon no match.
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // Access existing cart item using found index and store it.
    // If no index was found then LHS will be set to undefined.
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      // Craft new item which will replace the existing item.
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
      // Copy all items into new array.
      updatedItems = [...state.items];
      // Replace existing item in new array with updated item.
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    // Update total € amount.
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    // Find the existing cart item index and element, like in "ADD"
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    // If the item being removed is the last one,
    // it should be immutably deleted from the items array.
    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    // If it's not the last one, immutably decrease its quantity by 1.
    else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
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
