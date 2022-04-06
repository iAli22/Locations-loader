import React from "react";
import style from "./spinner.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={style.spinner} data-testid="spinner">
      <div className={style.lds_hourglass}></div>
    </div>
  );
};

export default Spinner;
