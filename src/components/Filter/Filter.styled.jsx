import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  margin-left: 10px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  &:hover,
  &:focus,
  &:active {
    outline-color: purple;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 200, 0.4);
  }
`;
