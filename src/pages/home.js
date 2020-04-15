import React, { Component } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

import Slid from "../components/Slider/index";

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
             <div>
  {/* hero */}
  <section className="bg-primary">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-white text-center">
          <h1 className="font-weight-light">Very Powerful <b>Documentation</b> and Help Center Bootstrap Template.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
        </div>
      </div>
    </div>
  </section>
  {/* / hero */}
  <section className="half bg-primary">
   <div className="container-full mb-5">
      <div className="row gutter-0 justify-content-center">
        <div className="col-12">
          <div className="owl-carousel owl-carousel-showcase owl-carousel-fluid" data-items="[3,2,1]" data-center="true" data-margin={30} data-nav="true" data-loop="true">            
              <Slid/>            
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* components */}
  
  <section className="pt-0">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2><b>Highlight</b> what's important.</h2>
          <p>We offer high ammount of different components to showcase your content in the best way possible.</p>
        </div>
      </div>
      <div className="row gutter-3 align-items-center">
        <div className="col-lg-5">
          <div className="row justify-content-center justify-content-lg-end">
            <div className="col-8">
              <ul className="list-group list-group-minimal">
                <li className="list-group-item d-flex align-items-center">
                  <div>
                    <i className="fs-24 icon-check2 bg-blue text-white icon-boxed mr-2" />
                  </div>
                  Advanced Layout
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <div>
                    <i className="fs-24 icon-check2 bg-blue text-white icon-boxed mr-2" />
                  </div>
                  Exclusive Design
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-3 d-none d-lg-block">
            <div className="col">
              <div className="boxed p-3">
                <ul className="file-tree">
                  <li className="file-tree-folder empty">Images
                    <span>description</span>
                  </li>
                  <li className="file-tree-folder">CSS
                    <span>description</span>
                    <ul>
                      <li>file name <span>description</span></li>
                      <li>file name <span>description</span></li>
                    </ul>
                  </li>
                  <li className="file-tree-folder">HTML
                    <span>description</span>
                    <ul>
                      <li className="file-tree-folder">PAGES
                        <span>description</span>
                        <ul>
                          <li>file name <span>description</span></li>
                          <li>file name <span>description</span></li>
                          <li>file name <span>description</span></li>
                        </ul>
                      </li>
                      <li>file name <span>description</span></li>
                      <li>file name <span>description</span></li>
                    </ul>
                  </li>
                  <li>index.html <span>description</span></li>
                  <li>components.html <span>description</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row justify-content-center justify-content-lg-start">
            <div className="col-6 col-md-4">
              <div className="type boxed">
                <div>
                  <span className="badge badge-green">New</span>
                  <h5 className="type-title">Open Sans</h5>
                  <div className="type-example">
                    <span>Ab</span>
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
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="card">
                <div className="card-header no-border bg-white pb-0">
                  <ul className="nav nav-pills card-header-pills lavalamp" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">HTML</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">CSS</a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <pre><code className="language-markup">&lt;div class="image image-overlay"&gt;&lt;/div&gt;</code></pre>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <pre><code className="language-css">body {"{"}{"\n"}{"  "}&gt; section,{"\n"}{"  "}&gt; footer {"{"}{"\n"}{"    "}position: relative;{"\n"}{"    "}margin: 0 auto;{"\n"}{"    "}padding: 6.25rem 0;{"\n"}{"    "}overflow: hidden;{"\n"}{"  "}{"}"}{"\n"}{"}"}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 justify-content-center justify-content-lg-start">
            <div className="col-md-6">
              <div className="color bordered">
                <span className="color-example bg-blue" />
                <div className="color-info">
                  <h5 className="color-title">Active Blue</h5>
                  <span>#064CDB</span>
                </div>
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
          <h2>What's <b>in the box</b> ?</h2>
          <p>Everything you might need to build a super intuitive &amp; readable documentation. Missing something ? <a href="mailto:support@webuildthemes.com" className="action text-dark">Request</a></p>
        </div>
      </div>
      <div className="row gutter-1">
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/accordions.html" title="Accordions" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">Processeur</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/alerts.html" title="Alerts" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">Carte Graphiques</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/widgets.html" title="Widgets" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">Carte Mère</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/content/typography.html" title="Typography" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">RAM</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/video.html" title="Video" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">Refroidissement</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/cards.html" title="Cards" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">SSD</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/carousels.html" title="Carousels" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">Alimentation</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/code.html" title="Code" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">Boîtier</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/forms.html" title="Forms" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">HDD</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/accordions.html" title="Lists" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">OS</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/steps.html" title="Steps" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <h5 className="fs-18">Steps</h5>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/index.html" title="View All Components" className="card bordered highlight">
            <div className="card-body text-center py-1 py-md-2 py-lg-3 action">
              <Link to=""><h5 className="fs-18 text-primary">View all</h5></Link>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* / categories */}
  {/* cta */}
  <div className="half bg-white">
    <span className="half-bg bg-dark" />
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="cta boxed no-border bg-primary p-3 p-md-5">
            <i className="icon-shopping-cart2 icon-background text-white" />
            <div className="row">
              <div className="col text-white">
                <h2>Next Level of <b>Documentation</b></h2>
                <p className="lead">Purchase Guidebook now, and make documenting your project piece of cake. <a href className="action text-white">Buy Now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* / cta */}
  
</div>

                <Footer />
            </div>
        )
    }
}

export default Home;