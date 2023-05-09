import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardListWrapper = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const LinkBack = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  color: #471ca9;
  &:hover {
    color: white;
  }
`;
