import { useState } from "react";
import Header from "./components/Layout/Header";
import Synths from "./components/Synths/Synths";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={showCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Synths />
      </main>
    </CartProvider>
  );
}

export default App;
