import styled from 'styled-components';

export const FormWrapper = styled.form`
  border: 1px solid SteelBlue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 5px 100px 5px 5px;
`;

export const NameLabel = styled.label`
  padding: 5px 5px;
  color: Navy;
`;

export const NameInput = styled.input`
  border: none;
  padding: 5px 5px;
  &:focus {
    outline: 2px solid SteelBlue;
  }
  color: Navy;
`;

export const NumberLabel = styled.label`
  padding: 5px 5px;
  color: Navy;
`;

export const NumberInput = styled.input`
  border: none;
  padding: 5px 5px;
  &:focus {
    outline: 2px solid SteelBlue;
  }
  color: Navy;
`;

export const SubmitBtn = styled.button`
  margin-right: auto;
  margin-top: 10px;
  border: none;
  padding: 5px 10px;
  border-radius: 2px;
  color: white;
  background-color: SteelBlue;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  &:active {
    background-color: DeepSkyBlue;
  }
`;
