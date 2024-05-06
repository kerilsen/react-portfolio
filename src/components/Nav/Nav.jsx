import { useState } from "react";
import { Circle, NavLink } from "./Nav.styles";
import Stamen from "../Flower/Flower";

export default function Nav({ currentPage }) {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleHoverCircle = (position) => {
    setSelectedCircle(position);
  };

  return (
    <>
      <Circle
        $position="portfolio"
        onMouseEnter={() => handleHoverCircle("portfolio")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        <NavLink to="/portfolio" currentPage={currentPage}>
          portfolio
        </NavLink>
      </Circle>
      <Circle
        $position="contact"
        onMouseEnter={() => handleHoverCircle("contact")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        <NavLink to="/contact" currentPage={currentPage}>
          contact
        </NavLink>
      </Circle>
      <Circle
        $position="about"
        onMouseEnter={() => handleHoverCircle("about")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        <NavLink to="/" currentPage={currentPage}>
          about
        </NavLink>
      </Circle>
      <Circle
        $position="resume"
        onMouseEnter={() => handleHoverCircle("resume")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        <NavLink to="/resume" currentPage={currentPage}>
          resume
        </NavLink>
      </Circle>
      <Circle
        $position="github"
        onMouseEnter={() => handleHoverCircle("github")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        <a href="https://github.com/kerilsen">github</a>
      </Circle>
      <Stamen />
    </>
  );
}
