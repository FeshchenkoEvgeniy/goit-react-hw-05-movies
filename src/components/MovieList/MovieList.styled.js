import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 70px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const ListItem = styled.li`
border-radius: 2px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
} 
`;
export const ListItemImage = styled.img`
  width: 100%;
  height: 550px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 8px;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: black;
&:hover{
  color: darkorange
}
`