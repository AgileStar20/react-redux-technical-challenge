import React from "react";
import {
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import { get } from "lodash";
import Wrapper from "./styles";

const Collapse = props => {
  let materialLinks = get(props, "materials", []);
  return (
    <Wrapper>
      <CollapsibleHead className="collapsibleHeading">
        {props.title}
      </CollapsibleHead>
      <CollapsibleContent className="collapsibleContent">
        <ul className={props.scroll === true ? "isScrolll" : null}>
          {materialLinks.map((items, index) => {
            return <li key={index}>{items}</li>;
          })}
        </ul>
      </CollapsibleContent>
    </Wrapper>
  );
};

export default Collapse;
