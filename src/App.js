import React, { Component } from "react";
import AppStyled from "../src/AppStyled";
import MyMapComponent from "../src/Maps";
import Sidebar from "./components/Sidebar/index";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppStyled className="App">
        <div className="ContainerWrapper">
          <Sidebar />
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
