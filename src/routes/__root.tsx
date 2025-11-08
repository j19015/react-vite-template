import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import styled from "@emotion/styled";

const Header = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }

  &.active {
    color: #1e40af;
    font-weight: 600;
  }
`;

const Main = styled.main`
  min-height: calc(100vh - 60px);
`;

export const Route = createRootRoute({
  component: () => (
    <>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/users">Users (Lazy)</StyledLink>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <TanStackRouterDevtools />
    </>
  ),
});
