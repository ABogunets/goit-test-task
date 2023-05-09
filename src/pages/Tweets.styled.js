import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 30px;
  background-color: #90c6f2;
`;

export const Button = styled.button`
  display: block;

  padding: 8px 10px;
  margin: 20px auto 0px auto;

  border: 2px solid #471ca9;
  border-radius: 5px;

  text-decoration: none;
  text-align: center;
  cursor: pointer;

  color: #471ca9;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.22;
  font-weight: 600;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #e4bd50;
  }
`;
