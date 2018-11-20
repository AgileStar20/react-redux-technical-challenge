import React, { Component } from "react";
import AppStyled from "../src/AppStyled";
import MyMapComponent from "../src/Maps";
import img from "../src/img/download.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppStyled className="App">
        <div className="ContainerWrapper">
          <div className="sideBar">
            <ul>
              <div className="avatar">
                <img src={img} alt="" />
                <h4>Google Maps</h4>
              </div>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">features</a>
              </li>
              <li>
                <a href="">information</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </div>
          <div className="Wrapper">
            <div className="headTitle">
              <h2>
                boat ramps google map <br /> australia
              </h2>
            </div>
            <MyMapComponent />
          </div>
        </div>
        {/* <Maps /> */}
      </AppStyled>
    );
  }
}

export default App;
