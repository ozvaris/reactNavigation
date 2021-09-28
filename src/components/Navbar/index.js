import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
import logo from "../../logobig.png";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img src={logo} width="150px" style={{ marginLeft: "50px" }} alt="" />
        </NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/">Döviz</NavLink>
          <NavLink to="/about">Kullanıcılar</NavLink>
          <NavLink to="/contact">Markalar</NavLink>
          <NavLink to="/signin">Ürünler</NavLink>
          <NavLink to="/signin">Firmalar</NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Çıkış</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
