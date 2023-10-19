import { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {console.log("cartCtx.items: ", cartCtx.items)}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

// TODO should render all cart items, display total amount, give buttons
// for leaving cart and buttons for ordering
