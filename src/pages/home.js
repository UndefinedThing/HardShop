import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import Header from "../components/header";
import Footer from "../components/footer";
import changelog from "../assets/images/changelog.png";
import layout4 from "../assets/images/layout-4.png";
import helpcenter from "../assets/images/helpcenter.png";

class Home extends Component {
  render() {
    const images = [
      { url: "../assets/images/layout-1.png" },
      { url: "../assets/images/layout-2.png" },
      { url: "../assets/images/changelog.png" },
      { url: "../assets/images/layout-4.png" },
      { url: "../assets/images/helpcenter.png" },
    ];
    return (
      <div className="wrapper">
        <Header />
        <div>
          {/* hero */}
          <section className="bg-primary">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-white text-center">
                  <h1 className="font-weight-light">
                    Very Powerful <b>Documentation</b> and Help Center Bootstrap
                    Template.
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col text-center"></div>
              </div>
            </div>
          </section>
          {/* / hero */}
          <section className="half bg-primary">
            {/* <div className="half-bg bg-light pb-10">
              <div
                className="image image-gradient-vertical"
                style={{
                  backgroundImage: "url(../../../assets/images/image.jpg)",
                }}
              /> */}
            {/* </div> */}
            <div className="container-full mb-5">
              <div className="row gutter-0 justify-content-center">
                <div className="col-12">
                  <div
                    className="owl-carousel owl-carousel-showcase owl-carousel-fluid"
                    data-items="[3,2,1]"
                    data-center="true"
                    data-margin={30}
                    data-nav="true"
                    data-loop="true"
                  >
                    <div className="card card-showcase lift">
                      <SimpleImageSlider
                        width={1370}
                        height={400}
                        images={images}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="type bordered">
                <div>
                  <h5 className="type-title">Open Sans Bold</h5>
                  <div className="type-example">
                    <span className="font-weight-bold">Ab</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="card">
                  <div className="card-header no-border bg-white pb-0">
                    <ul
                      className="nav nav-pills card-header-pills lavalamp"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          HTML
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          CSS
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <pre>
                          <code className="language-markup">
                            &lt;div class="image image-overlay"&gt;&lt;/div&gt;
                          </code>
                        </pre>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <pre>
                          <code className="language-css">
                            body {"{"}
                            {"\n"}
                            {"  "}&gt; section,{"\n"}
                            {"  "}&gt; footer {"{"}
                            {"\n"}
                            {"    "}position: relative;{"\n"}
                            {"    "}margin: 0 auto;{"\n"}
                            {"    "}padding: 6.25rem 0;{"\n"}
                            {"    "}overflow: hidden;{"\n"}
                            {"  "}
                            {"}"}
                            {"\n"}
                            {"}"}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* / components */}
          {/* categories */}
          <section className="bg-white">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                  <h2>
                    What's <b>in the box</b> ?
                  </h2>
                  <p>
                    Everything you might need to build a super intuitive &amp;
                    readable documentation. Missing something ?{" "}
                    <a
                      href="mailto:support@webuildthemes.com"
                      className="action text-dark"
                    >
                      Request
                    </a>
                  </p>
                </div>
              </div>
              <div className="row gutter-1">
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/accordions.html"
                    title="Accordions"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">Processeur</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/alerts.html"
                    title="Alerts"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">Carte Graphiques</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/widgets.html"
                    title="Widgets"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">Carte Mère</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/content/typography.html"
                    title="Typography"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">RAM</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/video.html"
                    title="Video"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">Refroidissement</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/cards.html"
                    title="Cards"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">SSD</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/carousels.html"
                    title="Carousels"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">Alimentation</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/code.html"
                    title="Code"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">Boîtier</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/forms.html"
                    title="Forms"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">HDD</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/accordions.html"
                    title="Lists"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">OS</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/components/steps.html"
                    title="Steps"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
                      <h5 className="fs-18">Steps</h5>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    href="documentation/index.html"
                    title="View All Components"
                    className="card bordered highlight"
                  >
                    <div className="card-body text-center py-1 py-md-2 py-lg-3 action">
                      <h5 className="fs-18 text-primary">View all</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  </div>
  
</div>

                <Footer />
            </div>
        )
=======
    );
    {
      /* / components */
    }
    {
      /* categories */
>>>>>>> 62628ade66536d5e3bcf81a693ab746dc9328db1
    }
  }
}

export default Home;
