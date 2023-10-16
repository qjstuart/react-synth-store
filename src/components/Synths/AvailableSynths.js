import styles from "./AvailableSynths.module.css";
import Card from "../UI/Card";
import SynthItem from "./SynthItem/SynthItem";

const DUMMY_SYNTHS = [
  {
    id: "s1",
    name: "Arturia MiniFreak",
    description: "37 Velocity-sensitive slim keys with aftertouch",
    price: 579.49,
  },
  {
    id: "s2",
    name: "Behringer Poly D",
    description: "37 Full-size velocity-sensitive keys",
    price: 666.11,
  },
  {
    id: "s3",
    name: "Korg Minilogue XD",
    description: "37 Velocity-sensitive slim keys",
    price: 611.99,
  },
  {
    id: "s4",
    name: "Dave Smith Instruments Prophet REV-2",
    description: "Expandable to 16 voices with optional voice card",
    price: 1990.99,
  },
];

const AvailableSynths = () => {
  const synthsList = DUMMY_SYNTHS.map((synth) => (
    <SynthItem
      key={synth.id}
      name={synth.name}
      description={synth.description}
      price={synth.price}
    />
  ));

  return (
    <section className={styles.synths}>
      <Card>
        <ul>{synthsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableSynths;
