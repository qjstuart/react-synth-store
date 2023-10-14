import { Fragment } from "react";
import modularMoogsImage from "../../assets/modular-moogs-image.webp";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React SynthStore</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={modularMoogsImage} alt="Modular synthesizer desk setup" />
      </div>
    </Fragment>
  );
};

export default Header;
