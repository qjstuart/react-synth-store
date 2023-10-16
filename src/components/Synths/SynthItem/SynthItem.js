import styles from "./SynthItem.module.css";
import SynthItemForm from "./SynthItemForm";
import SynthThumbnail from "./SynthThumbnail";

const SynthItem = (props) => {
  const price = `€${props.price.toFixed(2)}`;

  return (
    <li className={styles.synth}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <SynthThumbnail src={props.thumbnail}/>
      </div>
      <div>
        <SynthItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default SynthItem;
