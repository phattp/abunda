import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../img/112539.svg";

const Logo = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 2.4rem;
  }

  & div {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 1.6rem;
    letter-spacing: 2px;
    line-height: 0;
    margin-left: 0.1rem;
    color: ${props => props.theme.colorPrimary};
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colorPrimary};

  :link,
  :visited {
    text-decoration: none;
    color: ${props => props.theme.colorPrimary};
  }

  :hover,
  :active {
    color: ${props => props.theme.colorBlueDark};
  }
`;

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      sticky="top"
      className="pt-3 pb-3"
      style={{ boxShadow: "1px 1px 4px 1px rgba(0, 0, 0, 0.2)" }}
    >
      <StyledLink to="/">
        <Logo>
          <img src={logo} alt="logo" />
          <div>abunda</div>
        </Logo>
      </StyledLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <StyledLink to="/listings" className="mr-4">
            ซื้อ
          </StyledLink>
          <StyledLink to="/listings" className="mr-4">
            เช่า
          </StyledLink>
          <StyledLink className="mr-4" to="/">
            บทความ
          </StyledLink>
          <StyledLink className="mr-4" to="/">
            เกี่ยวกับเรา
          </StyledLink>
          <StyledLink to="/">ติดต่อเรา</StyledLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
