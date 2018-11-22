import React from "react";
import { CollapsibleComponent } from "react-collapsible-component";
import Wrapper from "./styles";
import Collapse from "./../../components/Collapse/index";
import { connect } from "react-redux";

class Sidebar extends React.Component {
  render(props) {
    return (
      <Wrapper className="sideBar">
        <h5>Boat Ramps</h5>
        <CollapsibleComponent>
          <Collapse
            title="construction material"
            materials={this.props.materials}
          />
          <Collapse title="Area" scroll={true} materials={this.props.areas} />
        </CollapsibleComponent>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({
  materials: state.materials,
  areas: state.areas
});

const SidebarConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarConnect;
