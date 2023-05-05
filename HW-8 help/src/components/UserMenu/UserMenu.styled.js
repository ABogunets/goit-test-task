import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Welcome = styled.span`
  font-weight: 700;
  color: steelblue;
  margin-right: 12px;
`;

export const LogOutBtn = styled.button`
  border: none;
  padding: 5px 10px;
  border-radius: 2px;
  color: white;
  background-color: SteelBlue;
  font-size: 12px;
  font-weight: 700;
  &:active {
    background-color: DeepSkyBlue;
  }
`;
