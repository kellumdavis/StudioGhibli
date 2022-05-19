import React from "react";
import { FaBars } from "react-icons/fa";

 import{ Nav,
  NavLink,
  NavMenu,
  MobileIcon
} from "./HeaderElements";
function Navbar({toggle}) {
  console.log({toggle})
  return (
    <header>
      <Nav>
        <NavLink to="/">
          <img className="ghibli-logo" src="https://fontmeme.com/permalink/220518/ca3ba66369633f680a4aedf7deb05dd2.png" alt="studio ghibli"/>
        </NavLink>
        <MobileIcon onClick={toggle}>
        <FaBars />

        </MobileIcon>
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

export default Navbar;
