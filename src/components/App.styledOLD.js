import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  padding: 20px 20px;
  /* padding-bottom: 24px; */
`;

export const Button = styled.button`
  display: inline-block;

  padding: 8px 10px;
  margin-left: auto;
  margin-right: auto;

  border: 0;
  border-radius: 5px;

  text-decoration: none;
  text-align: center;
  cursor: pointer;

  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.22;
  font-weight: 500;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  background-color: #5736a3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #471ca9;
  }
`;
