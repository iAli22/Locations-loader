import React from "react";
import { Navbar } from "../../components";
import { CardsContainer } from "../../containers";
import style from "./app.module.scss";

const App: React.FC = () => {
  return (
    <main className={style.app}>
      <Navbar />
      <CardsContainer />
    </main>
  );
};

export default App;
