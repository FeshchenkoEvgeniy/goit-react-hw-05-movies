import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header,StyledNavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
