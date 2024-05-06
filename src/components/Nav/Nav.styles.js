import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Circle = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  transition: all 1s ease-in-out;
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
      case "portfolio":
        return css`
          top: -50px;
          left: 30%;
          transform: translateY(50%);
        `;
      case "contact":
        return css`
          bottom: -45px;
          left: -10%;
          transform: translate(50%, -50%);
        `;
      case "about":
        return css`
          top: 18%;
          left: -45px;
          transform: translateX(50%);
        `;
      case "resume":
        return css`
          top: 18%;
          right: -55px;
          transform: translateX(-50%);
        `;
      case "github":
        return css`
          bottom: -45px;
          right: -10%;
          transform: translate(-50%, -50%);
        `;
      default:
        return null;
    }
  }}
`;

export const NavLink = styled(Link)`
  color: ${(props) => (props.currentPage === "/" ? "white" : "black")};
`;
