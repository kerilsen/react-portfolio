import { NavBar, NavList, NavItem, NavLink } from "./Nav.styles";

export default function Nav({ currentPage }) {
  return (
    <NavBar>
      <NavList>
        <NavItem>
          <NavLink to="/" currentPage={currentPage}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/portfolio" currentPage={currentPage}>
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" currentPage={currentPage}>
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/resume" currentPage={currentPage}>
            Resume
          </NavLink>
        </NavItem>
      </NavList>
    </NavBar>
  );
}
