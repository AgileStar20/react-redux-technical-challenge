import styled from "styled-components";

export default styled.div`
  padding: 0px 3px;
  .slideOff {
    position: fixed;
    left: 0;
    top: 0;
    width: 178px;
    height: 100%;
    background: #fff;
    padding: 0 8px;
    transform: translateX(-100%);
    transition: 0.3s all;
    z-index: 100;
  }
  .slideOff ul li {
    list-style-type: none;
  }
  .slideIn {
    position: fixed;
    transform: translateX(0);
    left: 0;
    top: 0;
    width: 178px;
    height: 100%;
    background: #fff;
    padding: 0 8px;
    transition: 0.3s all;
    z-index: 100;
  }
  .slideIn ul li {
    list-style-type: none;
  }
  .togglerButton {
    position: fixed;
    left: 15px;
    top: 10px;
    z-index: 110;
    background: #eee;
    height: 3px;
    width: 25px;
    cursor: pointer;
    transform: translateX(0px);
    transition: 0.5s all;
  }
  .togglerButton::before {
    content: "";
    position: absolute;
    top: -5px;
    background: #eee;
    height: 3px;
    width: 100%;
  }
  .togglerButton::after {
    content: "";
    position: absolute;
    bottom: -5px;
    background: #eee;
    height: 3px;
    width: 100%;
  }
  .togglerButtonBlack {
    position: fixed;
    left: 15px;
    top: 10px;
    z-index: 110;
    background: #333;
    height: 3px;
    width: 25px;
    cursor: pointer;
    transform: translateX(136px);
    transition: 0.5s all;
  }
  .togglerButtonBlack::before {
    content: "";
    position: absolute;
    top: -5px;
    background: #333;
    height: 3px;
    width: 100%;
  }
  .togglerButtonBlack::after {
    content: "";
    position: absolute;
    bottom: -5px;
    background: #333;
    height: 3px;
    width: 100%;
  }
`;
