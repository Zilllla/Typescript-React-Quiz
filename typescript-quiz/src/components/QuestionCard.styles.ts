import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  background: #85b9b9;
  border-radius: 10px;
  border: 2px solid #cbd1ba;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 350px;
    height: 60px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "#9BD19A" : !correct && userClicked ? "#C87A83" : "#5C777E"};
    border: 3px solid #CBD1BA;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #CBD1BA;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
