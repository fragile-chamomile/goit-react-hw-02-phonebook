import styled from '@emotion/styled';

export const Form = styled.form``;

export const Label = styled.label`
  display: block;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  margin-left: 10px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  &:hover,
  &:focus,
  &:active {
    outline-color: green;
    box-shadow: 0px 5px 10px 2px rgba(0, 200, 0, 0.4);
  }
`;

export const Button = styled.button`
  width: 120px;
  margin-bottom: 50px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  &:hover,
  &:focus {
    color: green;
    box-shadow: 0px 5px 10px 2px rgba(0, 200, 0, 0.4);
  }
`;
