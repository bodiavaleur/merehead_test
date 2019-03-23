import styled from 'styled-components';

export const UsersList = styled.ul`
  width: 400px;
  height: auto;
`;

export const User = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 125px;
  margin: 30px 0;
  box-shadow: 0 0 15px 2px #a7a7a7;
  border-radius: 20px;
  text-align: center;
`;

export const UserName = styled.span`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
`;

export const UserDescription = styled.p`
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  line-height: 1.1rem;
  width: 80%;
`;
