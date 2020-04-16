import React, { Component } from "react";
import hardware from "../Images/hardware.jpg";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header className="header header-sticky header-transparent">
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
          <a href="/" className="navbar-brand">
            <img src={hardware} alt="Logo" />
          </a>
          <Navbar.Brand href="/">HardShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="">News</Nav.Link>
              <Nav.Link href="">Configuration</Nav.Link>
              <NavDropdown title="Composants" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Processeur</NavDropdown.Item>
                <NavDropdown.Item href="">Carte Mère</NavDropdown.Item>
                <NavDropdown.Item href="">RAM</NavDropdown.Item>
                <NavDropdown.Item href="">Carte Graphique</NavDropdown.Item>
                <NavDropdown.Item href="">Refroidissement</NavDropdown.Item>
                <NavDropdown.Item href="">SSD</NavDropdown.Item>
                <NavDropdown.Item href="">Alimentation PC</NavDropdown.Item>
                <NavDropdown.Item href="">Boîtier</NavDropdown.Item>
                <NavDropdown.Item href="">HDD</NavDropdown.Item>
                <NavDropdown.Item href="">OS</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/CRUDs">Config</NavDropdown.Item>
                <NavDropdown.Item href="/boutique">Boutique</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="">Recherche</Nav.Link>
              <Nav.Link href="/Auth">Connexion</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
