import styles from "./SynthItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const SynthItemForm = (props) => {
  const quantityInputRef = useRef();
  const [quantityIsValid, setQuantityIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === "0" ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 5
    ) {
      setQuantityIsValid(false);
      return;
    }
    props.onAddToCart(enteredQuantityNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
        label="Quantity"
        input={{
          id: `quantity_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!quantityIsValid && (
        <p>Invalid quantity! Please enter an quantity betweeen 1-5</p>
      )}
    </form>
  );
};

export default SynthItemForm;
