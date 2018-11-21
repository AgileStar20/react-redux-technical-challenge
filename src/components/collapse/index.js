import React from "react";
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import CollapsStyled from "./collapseStyle";

const Collapse = props => {
  return (
    <CollapsStyled>
      <CollapsibleHead className="collapsibleHeading">
        {props.title}
      </CollapsibleHead>
      <CollapsibleContent className="collapsibleContent">
        <ul>
          <li>boot ramp 1</li>
          <li>boot ramp 2</li>
          <li>boot ramp 3</li>
          <li>boot ramp 4</li>
          <li>boot ramp 5</li>
          <li>boot ramp 6</li>
        </ul>
      </CollapsibleContent>
    </CollapsStyled>
  );
};

export default Collapse;
