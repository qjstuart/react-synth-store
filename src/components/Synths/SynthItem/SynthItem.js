import styles from "./SynthItem.module.css";

const SynthItem = (props) => {
  const price = `€${props.price.toFixed(2)}`;

  return (
    <li className={styles.synth}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default SynthItem;
