import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/Tim-Mossholder.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
  }
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #cbd1ba;
  }
  .score {
    color: #cbd1ba;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: "Mulish";
    color: #85b9b9;
    font-size: 70px;
    text-align: center;
    background-color: #4e669d;
    border-radius: 10px;
    border: 2px solid #cbd1ba;
    width: 80%;
  }
  .start,
  .next {
    cursor: pointer;
    background: #4e669d;
    border: 2px solid #cbd1ba;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
