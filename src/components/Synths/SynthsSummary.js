import styles from "./SynthsSummary.module.css";

const SynthsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Choose from our selection of legendary synthesizers!</h2>
      <p>
        Here at the React SynthStore we are dedicated to providing you with the best possible selection of synthesizers. 
        Therefore, you will find everything from modern machines to timeless classics, both from the analogue and digital realm!
      </p>
    </section>
  );
};

export default SynthsSummary;
