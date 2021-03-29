import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavLink,
  NavItem,
  NavMenu,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="home" spy={true} smooth={true} offset={-150}>
            <NavIcon />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <HiOutlineMenuAlt3 />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={handleClick}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="career"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={handleClick}
              >
                Career
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
