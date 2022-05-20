import React from "react";
 import{ Nav,
  NavMenu,
} from "./FooterElements";
import {FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer({toggle}) {
  console.log({toggle})
  return (
    <header>
      <Nav>
        
        
        <NavMenu>
          <h4>Kellum Davis</h4>
        <a className="footAnchor" href="https://github.com/kellumdavis"><FaGithub/></a>
        <a className="footAnchor" href="https://www.linkedin.com/in/kellumdavis/"><FaLinkedin/></a>
        </NavMenu>
      </Nav>
    </header>
  );
}

export default Footer;