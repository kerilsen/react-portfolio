import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
`;

export const Circle = styled.div`
width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  /* Apply hover effect for selected circle */
  &:hover {
    transform: scale(1.5); /* Make the circle bigger on hover */
    z-index: 2; /* Bring the hovered circle to the top */
  }
  /* Position the circles around the selected circle */
  ${({ $position }) => {
    switch ($position) {
      case "top":
        return css`
          top: -75px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom":
        return css`
          bottom: -75px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "left":
        return css`
          top: 50%;
          left: -75px;
          transform: translateY(-50%);
        `;
      case "right":
        return css`
          top: 50%;
          right: -75px;
          transform: translateY(-50%);
        `;
      default:
        return null;
    }
  }}
`;
