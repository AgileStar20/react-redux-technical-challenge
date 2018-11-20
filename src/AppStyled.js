import styled from "styled-components";

const AppStyled = styled.div`
  .ContainerWrapper {
    display: flex;
    justify-content: center;
    background: #00bcd4;
    padding: 40px 0;
    float: right;
    width: 82%;
  }
  .Wrapper {
    width: 60%;
  }
  .Wrapper h2 {
    text-align: center;
    text-transform: uppercase;
    color: #eee;
  }

  .sideBar {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    background: #fff;
  }
  .sideBar ul li {
    list-style-type: none;
    padding: 8px 0;
  }
  .sideBar ul .avatar img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .sideBar ul .avatar h4 {
    margin-top: 7px;
    color: #333;
  }
  .sideBar ul li a {
    text-decoration: none;
    text-transform: capitalize;
    cursor: pointer;
    color: #333;
    transition: 0.3s all;
  }
  a: hover {
    color: #00bcd4 !important;
  }
`;
export default AppStyled;
