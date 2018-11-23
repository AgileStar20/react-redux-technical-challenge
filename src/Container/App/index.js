import React, { Component } from "react";
import Wrapper from "./styles";
import { connect } from "react-redux";
import Map from "./../../components/Maps/index";
import { initAction, filterAction, areaFilterAction } from "./actions";
import ramps from "../../boat_ramps.json";
import Sidebar from "../../components/Sidebar/index";

class App extends Component {
  componentDidMount() {
    this.props.init(ramps);
  }

  get filteredRamps() {
    const { ramps, filterText, areaFilterText } = this.props;
    if (ramps && ramps.features !== undefined) {
      let features = filterText
        ? ramps.features.filter(item => item.properties.material === filterText)
        : ramps.features;

      if (areaFilterText) {
        const [start, end] = areaFilterText.split("-");
        features = features.filter(
          item => item.properties.area_ >= start && item.properties.area_ <= end
        );
      }

      return features.map(ll => {
        return ll.geometry.coordinates.map(kk => {
          return { lng: kk[0], lat: kk[1] };
        });
      });
    }

    return [];
  }

  render(props) {
    return (
      <Wrapper className="App">
        <div className="ContainerWrapper">
          <Sidebar
            filter={this.props.filter}
            materials={this.props.materials}
            areas={this.props.areas}
            areaFilter={this.props.areaFilter}
            filterArea={this.props.filterArea}
          />
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
  filter: payload => dispatch(filterAction(payload)),
  filterArea: payload => dispatch(areaFilterAction(payload))
});

const mapStateToProps = state => ({
  ramps: state.ramps,
  materials: state.materials,
  filterText: state.filter,
  areas: state.areas,
  areaFilterText: state.areaFilter
});

const MapApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default MapApp;
