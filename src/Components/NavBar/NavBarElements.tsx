import styled from "styled-components";

export const NavBarStyles = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  z-index: 999;

  .topLeft,
  .topRight {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .topCenter {
    flex: 6;
  }

  .topIcon {
    font-size: 28px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;
  }

  .topImage {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
  }

  .topList {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .topListItem {
    margin-right: 20px;
    font-size: 28px;
    font-weight: 300;
    cursor: pointer;
  }

  .topSearchIcon {
    font-size: 25px;
    color: #666;
    cursor: pointer;
    margin-left: 15px;
  }
`;
