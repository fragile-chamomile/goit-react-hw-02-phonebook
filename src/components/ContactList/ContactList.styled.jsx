import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 0;
  text-align: center;
`;

export const Item = styled.li`
  margin-bottom: 20px;
`;

export const Contact = styled.span`
  margin: 0;
  margin-right: 20px;
`;

export const Button = styled.button`
  width: 70px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  &:hover,
  &:focus {
    color: red;
    box-shadow: 0px 5px 10px 2px rgba(224, 0, 0, 0.4);
  }
`;
