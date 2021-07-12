import styled from "styled-components";

export const SettingsPageStyles = styled.div`
  display: flex;

  .settingsWrapper {
    flex: 9;
    padding: 20px;
  }

  .settingsTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .settingsUpdateTitle {
    font-size: 30px;
    margin-bottom: 20px;
    color: lightcoral;
  }

  .settingsDeleteTitle {
    color: red;
    font-size: 12px;
    cursor: pointer;
  }

  .settingsForm {
    display: flex;
    flex-direction: column;

    > label {
      font-size: 20px;
      margin-top: 20px;
    }

    > input {
      color: gray;
      margin-top: 10px;
      margin-bottom: 10px;
      height: 30px;
      border: none;
      border-bottom: 1px solid lightgray;
    }
  }

  .settingsProfilePicture {
    display: flex;
    align-items: center;
    margin: 10px 0;

    > img {
      width: 70px;
      height: 70px;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  .settingsProfilePictureIcon {
    width: 25px;
    height: 25px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    margin-left: 10px;
    color: white;
    background-color: lightcoral;
    cursor: pointer;
  }

  .settingsSubmit {
    align-self: center;
    width: 150px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: teal;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
