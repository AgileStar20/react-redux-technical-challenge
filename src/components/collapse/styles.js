import styled from "styled-components";

export default styled.div`
  .collapsibleContent > ul > li {
    // list-style-type: none;
    padding: 3px 9px;
    font-size: 13px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    color: #fff;
  }
  .collapsibleContent > ul {
    margin: 0;
    background: #5c6bc0;
  }
  li:hover {
    background: #4040408c;
    transition: 0.1s all ease-in-out;
  }
  .isScrolll {
    height: 160px;
    overflow-x: hidden;
  }
  .isScrolll::-webkit-scrollbar {
    width: 8px;
    background: #4553a5;
  }
  .isScrolll::-webkit-scrollbar-thumb {
    background: #323b6e;
    border-radius: 10px;
  }
  .collapsibleHeading {
    background: #3f51b5 !important;
    border: 0.5px solid #eeeeee3b;
    padding: 7px 18px;
  }
  .collapsibleContent ul {
    padding: 0;
  }
  .collapsibleContent {
    padding: 0;
  }
`;
