import React, { Component } from "react";
import hardware from "../Images site/hardware.jpg";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header className="header header-sticky header-transparent">
              
              
              <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                <a href className="navbar-brand">
                  <img src={hardware} alt="Logo" />
                </a>
                <Navbar.Brand href="/">HardShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                </Navbar.Collapse>
              </Navbar>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      Home
                    </a>
                  </li>
                  
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="dropdown-2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Help Center
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdown-2">
                      <a
                        className="dropdown-item"
                        href="../html/help/homepage-1.html"
                      >
                        Homepage 1
                      </a>
                      <a
                        className="dropdown-item"
                        href="html/help/homepage-2.html"
                      >
                        Homepage 2
                      </a>
                      <a
                        className="dropdown-item"
                        href="html/help/homepage-3.html"
                      >
                        Homepage 3
                      </a>
                      <a
                        className="dropdown-item"
                        href="html/help/category.html"
                      >
                        Category
                      </a>
                      <a
                        className="dropdown-item"
                        href="html/help/category-inner.html"
                      >
                        Category Inner
                      </a>
                      <a
                        className="dropdown-item"
                        href="html/help/article-1.html"
                      >
                        Article 1
                      </a>
                      <a
                        className="dropdown-item"
                        href="html/help/article-2.html"
                      >
                        Article 2
                      </a>
                      <a
                        className="dropdown-item"
                        href="html/help/tutorial.html"
                      >
                        Tutorial
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="dropdown-3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdown-3">
                      <a
                        className="dropdown-item"
                        href="html/pages/contact.html"
                      >
                        Contact
                      </a>
                      <a
                        className="dropdown-item"
                        href="html/pages/changelog.html"
                      >
                        Changelog
                      </a>
                      <a className="dropdown-item" href="html/pages/faq.html">
                        FAQ
                      </a>
                      <a
                        className="dropdown-item"
                        href="html/pages/pricing.html"
                      >
                        Pricing
                      </a>
                      <a className="dropdown-item" href="html/pages/terms.html">
                        Terms
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="html/pages/404.html">
                        404
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="documentation/index.html">
                      Docs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="documentation/changelog.html">
                      Connexion
                    </a>
                  </li>
                </ul>
              </div>           
            <div className="dropdown-menu" aria-labelledby="dropdown-3">
              <a className="dropdown-item" href="html/pages/contact.html">
                Contact
              </a>
              <a className="dropdown-item" href="html/pages/changelog.html">
                Changelog
              </a>
              <a className="dropdown-item" href="html/pages/faq.html">
                FAQ
              </a>
              <a className="dropdown-item" href="html/pages/pricing.html">
                Pricing
              </a>
              <a className="dropdown-item" href="html/pages/terms.html">
                Terms
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="html/pages/404.html">
                404
              </a>
            </div>
      </header>
    );
  }
}

export default Header;
