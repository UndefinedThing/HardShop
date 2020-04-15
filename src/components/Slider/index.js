import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";



const content = [
  {
    title: "Prochainement, les nouvelles RTX 3XXX de chez NVidia",
    description:
      "Ca y est ! Quelques fuites de la part d'NVidia nous ont révélées que celles-ci seront présentées cet Eté 2020. Mais rien n'est encore sur vu le contexte actuel",
    button: "Lire plus",
    image: "https://imgur.com/VkmKzQz.jpg",
    user: "L'équipe HardShop",
    userProfile: "https://imgur.com/u7h24fM.jpg",
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "L'équipe HardShop",
    userProfile: "https://imgur.com/u7h24fM.jpg",
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://imgur.com/u7h24fM.jpg",
  },
];

class Slid extends Component {
  render() {
    return (
      <div>
        <Slider className="slider-wrapper" autoplay={3000}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posted by <strong>{item.user}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Slid;
