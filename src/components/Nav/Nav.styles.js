import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  color: white;
  font-family: var(--sans-serif);
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 0.5rem;
`;

export const NavLink = styled(Link)`
color: ${(props) => (props.currentPage === "/" ? "white" : "black")};
background-color: ${(props) => (props.currentPage === "/" ? "white" : "none")};
opacity: ${(props) => (props.currentPage === "/" ? 0.7 : 1)};
border-radius: ${(props) => (props.currentPage === "/" ? 50 : 0)}
&:hover {
    color: var(--coral);
}
`;
