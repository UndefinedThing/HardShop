import React, { Component } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink,   MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Pills.css"; //Import necessary styles for this example

class PillsWithContent extends Component {
state = {
  items: {
  content: "1",
  contentCard: "1",
  }

}

togglePills = (type, tab) => e => {
  e.preventDefault();
  if (this.state.items[type] !== tab) {
    let items = { ...this.state.items };
    items[type] = tab;
    this.setState({
      items
    });
  }
};


render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBNav
              tabs
              className="nav-justified pills-rounded pills-purple-gradient"
            >
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.items["content"] === "2"}
                  onClick={this.togglePills("content", "2")}
                >
                  Fashion
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.items["content"] === "1"}
                  onClick={this.togglePills("content", "1")}
                >
                  Lifestyle
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.items["content"] === "3"}
                  onClick={this.togglePills("content", "3")}
                >
                  Beauty
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.items["content"]}>
              <MDBTabPane tabId="2">
                
              </MDBTabPane>
              <MDBTabPane tabId="1">
              
              </MDBTabPane>
              <MDBTabPane tabId="3">
                
              </MDBTabPane>
            </MDBTabContent>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
    );
  }
}

export default PillsWithContent;