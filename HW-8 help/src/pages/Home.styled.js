import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 10px 10px;
  border-radius: 10px;

  background-color: PowderBlue;
`;

export const Wrapper = styled.div`
  border: 1px solid Steelblue;
  border-radius: 5px;
  width: 400px;
  min-height: calc(100vh - 150px);

  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 34px;
  color: steelblue;
  text-align: center;

  > span {
    display: inline-flex;
    align-items: center;
    padding: 0px;
  }
`;
