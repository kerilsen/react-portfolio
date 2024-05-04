import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Circle = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    transform: scale(1.5);
    z-index: 2;
  }
  ${({ $position }) => {
    switch ($position) {
      case "top":
        return css`
          top: 0px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom":
        return css`
          bottom: 5px;
          left: 40%;
          transform: translateX(-50%);
        `;
      case "left":
        return css`
          top: 50%;
          left: 0px;
          transform: translateY(-50%);
        `;
      case "right":
        return css`
          top: 40%;
          right: 5px;
          transform: translateY(-50%);
        `;
      case "center":
        return css`
          top: 50%;
          left: 33.3%;
          transform: translateY(-50%);
        `;
      case "fifth":
        return css`
          bottom: -45px;
          right: 10%;
          transform: translateY(-50%);
        `;
      default:
        return null;
    }
  }}
`;

export const NavLink = styled(Link)`
color: ${($props) => ($props.currentPage === "/" ? "white" : "black")};
background-color: ${($props) => ($props.currentPage === "/" ? "white" : "none")};
opacity: ${($props) => ($props.currentPage === "/" ? 0.7 : 1)};
border-radius: ${($props) => ($props.currentPage === "/" ? 50 : 0)}
&:hover {
    color: var(--coral);
}
`;

export const ExternalLink = styled.a`
color: white;
  }
  
 &:active {
    background-color: var(--white);
    opacity: 0.7;
    border-radius: 50px;
  }
  
  &:hover {
    color: var(--coral);
  }
`