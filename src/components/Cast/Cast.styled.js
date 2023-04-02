import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0px 0px 30px;
`;

export const CastListItem = styled.li`
  padding: 18px;
  width: 150px;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px,
    rgb(9 30 66 / 8%) 0px 0px 0px 1px;
  transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;
