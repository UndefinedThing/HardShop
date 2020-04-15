import React, { Component } from "react";
import hardware from "../Images site/hardware.jpg";

class Header extends Component {
  render() {
    return (
      <header className="header header-sticky header-transparent">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a href className="navbar-brand">
                <img src={hardware} alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
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
                    <option
                      className="nav-link dropdown-toggle"
                      id="dropdown-1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Composants
                    </option>
                    <select
                      type="select"
                      className="dropdown-menu"
                      aria-labelledby="dropdown-1"
                    >
                      <option
                        className="dropdown-item"
                        href="html/docs/layout-1.html"
                      >
                        Processeur
                      </option>
                      <option
                        className="dropdown-item"
                        href="html/docs/layout-2.html"
                      >
                        Carte Graphique
                      </option>
                      <option
                        className="dropdown-item"
                        href="html/docs/layout-3.html"
                      >
                        Carte Mère
                      </option>
                      <option
                        className="dropdown-item"
                        href="html/docs/layout-4.html"
                      >
                        RAM
                      </option>
                    </select>
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
            </nav>
          </div>
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
          </li>

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
      </header>
    );
  }
}

export default Header;
