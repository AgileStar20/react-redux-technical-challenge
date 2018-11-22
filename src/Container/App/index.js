import React, { Component } from "react";
import Wrapper from "./styles";
import { connect } from "react-redux";
import Map from "./../../components/Maps/index";
import { initAction, filterAction } from "./actions";
import ramps from "../../boat_ramps.json";
import Sidebar from "./../Sidebar/index";

class App extends Component {
  componentDidMount() {
    this.props.init(ramps);
  }

  get filteredRamps() {
    const { ramps } = this.props;
    if (ramps && ramps.features !== undefined) {
      return ramps.features.map(ll => {
        return ll.geometry.coordinates.map(kk => {
          return { lat: kk[1], lng: kk[0] };
        });
      });
    }

    return [];
  }

  render(props) {
    return (
      <Wrapper className="App">
        <div className="ContainerWrapper">
          <Sidebar filter={this.props.filter} />
          <div className="Wrapper">
            <div className="headTitle">
              <h2>
                boat ramps google map <br /> australia
              </h2>
            </div>
            <Map ramps={this.filteredRamps} />
          </div>
        </div>
        {/* <Maps /> */}
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  init: payload => dispatch(initAction(payload)),
  filter: payload => dispatch(filterAction(payload))
});

const mapStateToProps = state => ({
  ramps: state.ramps
});

const MapApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default MapApp;
