import styles from "./AvailableSynths.module.css";
import Card from "../UI/Card";
import SynthItem from "./SynthItem/SynthItem";

const DUMMY_SYNTHS = [
  {
    id: "s1",
    name: "Arturia MiniFreak",
    description: "37 Velocity-sensitive slim keys with aftertouch",
    price: 579.49,
    thumbnail:
      "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/553604.webp",
  },
  {
    id: "s2",
    name: "Behringer Poly D",
    description: "37 Full-size velocity-sensitive keys",
    price: 666.11,
    thumbnail:
      "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/478597.webp",
  },
  {
    id: "s3",
    name: "Korg Minilogue XD",
    description: "37 Velocity-sensitive slim keys",
    price: 611.99,
    thumbnail:
      "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/457066.webp",
  },
  {
    id: "s4",
    name: "Dave Smith Instruments Prophet REV-2",
    description: "Expandable to 16 voices with optional voice card",
    price: 1990.99,
    thumbnail:
      "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/406556.webp",
  },
  {
    id: "s5",
    name: "Korg MS-20 Mini",
    description:
      "Reproduction of the original analogue circuitry with 37 mini keys",
    price: 568.0,
    thumbnail:
      "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/305808.webp",
  },
];

const AvailableSynths = () => {
  const synthsList = DUMMY_SYNTHS.map((synth) => (
    <SynthItem
      id={synth.id}
      key={synth.id}
      name={synth.name}
      description={synth.description}
      price={synth.price}
      thumbnail={synth.thumbnail}
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
