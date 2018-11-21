import Styled from "styled-components";

const CollapsStyled = Styled.div`
  .collapsibleContent> ul> li{
    list-style-type: none;
    padding: 3px 9px;
    font-size: 15px;
    cursor: pointer;
  }
  .collapsibleContent> ul{
    margin: 0;
  }
`;

export default CollapsStyled;
