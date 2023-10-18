import { useContext } from "react";

import CartContext from "../../store/cart-context";
import SynthItem from "../Synths/SynthItem/SynthItem";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {/* {[
        { id: "c1", name: "Korg MS-20 Mini", amount: "1", price: "568.00" },
      ].map((item) => {
        return <li>{item.name}</li>;
      })} */}
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
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
