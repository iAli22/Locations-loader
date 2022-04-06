import React from "react";
import Container from "../Container/Container";
import style from "./navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <Container>
        <div className={style.navbarContainer}>
          <div className={style.nav__logo}>
            <h2>Locations</h2>
          </div>
          <ul className={style.nav__items}>
            <li>Home</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
