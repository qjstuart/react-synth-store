import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Synths from "./components/Synths/Synths";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Synths />
      </main>
    </Fragment>
  );
}

export default App;
