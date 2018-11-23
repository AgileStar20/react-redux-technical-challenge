import React from "react";
import { CollapsibleComponent } from "react-collapsible-component";
import PropTypes from "prop-types";
import Wrapper from "./styles";
import Collapse from "../Collapse/index";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSidebar = () => {
    this.setState({
      slideOn: !this.state.slideOn,
      togglerStyle: !this.state.togglerStyle
    });
  };
  render() {
    return (
      <Wrapper>
        <div onClick={this.handleSidebar}>
          <span
            className={
              this.state.togglerStyle ? "togglerButtonBlack" : "togglerButton"
            }
          />
        </div>
        <div className={this.state.slideOn ? "slideIn" : "slideOff"}>
          <h5>Boat Ramps</h5>
          <CollapsibleComponent>
            <Collapse
              title="construction material"
              materials={this.props.materials}
              filter={this.props.filter}
            />
            <Collapse
              title="Area"
              scroll={true}
              filter={this.props.filterArea}
              materials={Object.keys(this.props.areas)}
            />
          </CollapsibleComponent>
        </div>
      </Wrapper>
    );
  }
}

Sidebar.propTypes = {
  materials: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
  filterArea: PropTypes.func.isRequired
};

export default Sidebar;
