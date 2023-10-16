import styles from "./SynthThumbnail.module.css";

const SynthThumbnail = (props) => {
  return <img className={styles.thumbnail} src={props.src} />;
};

export default SynthThumbnail;
