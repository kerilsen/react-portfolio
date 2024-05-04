import { useState } from "react";
import { Circle, NavLink, ExternalLink } from "./Nav.styles";
import Stamen from "../Flower/Flower";

export default function Nav({ currentPage }) {
 
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleHoverCircle = (position) => {
    setSelectedCircle(position);
  };

  return (
    <>
      <Circle
        $position="top"
        onMouseEnter={() => handleHoverCircle("top")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        <NavLink to="/portfolio" currentPage={currentPage}>
            portfolio
          </NavLink>
      </Circle>
      <Circle
        $position="bottom"
        onMouseEnter={() => handleHoverCircle("bottom")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        <NavLink to="/contact" currentPage={currentPage}>
            contact
          </NavLink>
      </Circle>
      <Circle
        $position="left"
        onMouseEnter={() => handleHoverCircle("left")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        about
      </Circle>
      <Circle
        $position="right"
        onMouseEnter={() => handleHoverCircle("right")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        <NavLink to="/resume" currentPage={currentPage}>
            resume
          </NavLink>
      </Circle>
      {/* <Circle
        $position="center"
        onMouseEnter={() => handleHoverCircle("center")}
        onMouseLeave={() => handleHoverCircle(null)}
       /> */}
      <Circle
        $position="fifth"
        onMouseEnter={() => handleHoverCircle("fifth")}
        onMouseLeave={() => handleHoverCircle(null)}
      >
        
        <ExternalLink href="https://github.com/kerilsen">github</ExternalLink>
      </Circle>
      <Stamen $position="center" />
    </>
  );
}
