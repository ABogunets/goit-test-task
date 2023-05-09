import styled from "styled-components";
import backgroundImage from "components/assets/background-image.jpg";

export const Container = styled.div`
  outline: 2px solid tomato;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  padding: 20px 10px;
  height: 100vh;
  background-size: cover;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  color: #4b2a99;
  text-transform: uppercase;
`;
