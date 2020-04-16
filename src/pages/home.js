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
          <h1 className="font-weight-light"><b>Ici se trouve tout ce dont vous avez besoin.</b> Les composants, les configs et les News en lien avec le Hardware.</h1>
        </div>
      </div>
      <div className="row">
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
  
  <section className="pt-2">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2><b>Tout ce qu'il faut retenir !</b></h2>
          <p></p>
        </div>
      </div>
      <div className="row gutter-3 align-items-center">
        <div className="col-lg-5">
          <div className="row justify-content-center justify-content-lg-end">
            <div className="col-8">
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row mt-3">
            <div className="col">
              
            </div>
          </div>
          <div className="row mt-3 justify-content-center justify-content-lg-start">
            <div className="col-md-6">
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
          <h2>Tout <b>est ici</b> !</h2>
          <p>Il manque quelque chose ? Faites-le nous savoir ! 
            <a href="mailto:support@webuildthemes.com" className="action text-dark">Request</a></p>
        </div>
      </div>
      <div className="row gutter-1">
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/accordions.html" title="Accordions" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link to=""><h5 className="fs-18">Processeur</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/alerts.html" title="Alerts" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link to=""><h5 className="fs-18">Carte Graphiques</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/widgets.html" title="Widgets" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link><h5 className="fs-18">Carte Mère</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/content/typography.html" title="Typography" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link><h5 className="fs-18">RAM</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/video.html" title="Video" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link><h5 className="fs-18">Refroidissement</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/cards.html" title="SSD" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link><h5 className="fs-18">SSD</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/carousels.html" title="Alimentation" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link><h5 className="fs-18">Alimentation</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/code.html" title="Code" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link><h5 className="fs-18">Boîtier</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/forms.html" title="Forms" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link><h5 className="fs-18">HDD</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/components/accordions.html" title="Lists" className="card bordered highlight">
            <div className="card-body text-center px-0 py-1 py-md-2 py-lg-3">
              <Link><h5 className="fs-18">OS</h5></Link>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <a href="documentation/index.html" title="View All Components" className="card bordered highlight">
            <div className="card-body text-center py-1 py-md-2 py-lg-3 action">
              <Link to=""><h5 className="fs-18 text-primary">voir plus</h5></Link>
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