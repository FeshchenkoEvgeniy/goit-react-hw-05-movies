import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
top: 0;
left: 0;
position: sticky;
z-index: 1100;
display: flex;
justify-content: center;
align-items: center;
min-height: 64px;
color: #fff;
background-color: gray;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledNavLink = styled(NavLink)`
color: #fff;
text-decoration: none;
&:not(last-child){
    margin-right: 10px;
}
&:hover{
    color:black
}
`