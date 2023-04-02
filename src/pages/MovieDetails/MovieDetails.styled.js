import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsList = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`;

export const GenreList = styled.ul`
  margin-top: 8px;
  display: flex;
`;

export const GenreListItem = styled.li`
  &:not(:last-child)::after {
    content: ',';
    margin-right: 5px;
  }
`;

export const P = styled.p`
  margin: 10px 0px;
`;

export const AdditionalDiv = styled.div`
  margin: 24px;
`;

export const List = styled.ul`
  margin: 8px 0px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const StyledLink = styled(Link)`
  width: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 4px;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  :hover {
    color: orangered;
  }
`;
