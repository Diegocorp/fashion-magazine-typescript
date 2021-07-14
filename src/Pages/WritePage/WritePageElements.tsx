import styled from "styled-components";

export const WritePageStyles = styled.div`
  padding-top: 50px;

  .writeImg {
    margin-left: 150px;
    width: 70vw;
    height: 250px;
    border-radius: 10px;
    object-fit: cover;
  }

  .writeForm {
    position: relative;
  }

  .writeFormGroup {
    margin-left: 150px;
    display: flex;
    align-items: center;
  }

  .writeIcon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgb(121, 118, 118);
    cursor: pointer;
  }

  .writeInput {
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 70vw;

    :focus {
      outline: none;
    }
  }

  .writeText {
    font-size: 20px;
    height: 100vh;
  }

  .writeSubmit {
    position: absolute;
    top: 20px;
    right: 50px;
    color: white;
    background-color: teal;
    padding: 10px;
    border: none;
    font-size: 20px;
    width: 90px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
