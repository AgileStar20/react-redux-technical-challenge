import React from "react";
import { CollapsibleComponent } from "react-collapsible-component";
import SidebarStyled from "./sidebarStyled";
import Collapse from "./../collapse/index";
const Sidebar = props => {
  return (
    <SidebarStyled className="sideBar">
      <h5>Boat Ramps</h5>
      <CollapsibleComponent>
        <Collapse title="construction material" />
        <Collapse title="Area" />
      </CollapsibleComponent>
    </SidebarStyled>
  );
};

export default Sidebar;
