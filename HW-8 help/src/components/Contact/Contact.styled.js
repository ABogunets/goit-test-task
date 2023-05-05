import styled from 'styled-components';

export const ContactData = styled.p`
  display: flex;
  align-items: center;
  padding: 5px 5px;
  color: navy;

  &::before {
    content: '\u2022';
    margin-right: 10px;
    font-size: 26px;
    color: steelblue;
    color: white;
  }
`;

export const BtnDelete = styled.button`
  border: none;
  padding: 0px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
