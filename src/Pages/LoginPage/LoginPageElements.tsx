import styled from "styled-components";

export const LoginPageStyles = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;

  .loginTitle {
    font-size: 80px;
  }

  .loginForm {
    margin-top: 20px;
    width: 300px;
    display: flex;
    flex-direction: column;

    > label {
      margin: 10px 0;
    }
  }

  .loginInput {
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 10px;

    :focus {
      outline: none;
    }
  }
  .loginButton {
    margin-top: 20px;
    cursor: pointer;
    background-color: lightcoral;
    color: white;
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    text-align: center;
  }

  .loginRegisterButton {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: teal;
    cursor: pointer;
    font-size: 20px;
    width: 90px;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
  }
`;
