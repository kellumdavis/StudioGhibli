import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./HeaderElements";
function Header(props) {
  return (
    <header>
      <h1>Studio Ghibli</h1>
      <Nav>
        <NavLink to="/">
          <div>Home</div>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/films" activeStyle>
            <div>Films</div>
          </NavLink>
          <NavLink to="/about" activeStyle>
            <div>About</div>
          </NavLink>
        </NavMenu>
      </Nav>
    </header>
  );
}

export default Header;
