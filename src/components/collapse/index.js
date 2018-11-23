import React from "react";
import {
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import Wrapper from "./styles";

const Collapse = ({ scroll, materials, filter, title }) => {
  return (
    <Wrapper>
      <CollapsibleHead className="collapsibleHeading">{title}</CollapsibleHead>
      <CollapsibleContent className="collapsibleContent">
        <ul className={scroll === true ? "isScrolll" : null}>
          <li onClick={() => filter(null)}>All</li>
          {materials &&
            materials.map((item, index) => {
              return (
                <li onClick={() => filter(item)} key={index}>
                  {item}
                </li>
              );
            })}
        </ul>
      </CollapsibleContent>
    </Wrapper>
  );
};

export default Collapse;
