import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const Chalkboard = styled.div`
  background-image: url("/assets/chalkboard.png");
  background-size: cover;
  background-position: center;
  width: 612px; // width of the chalkboard image
  height: 408px; // height of the chalkboard image
  display: flex;
  padding-right: 100px;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-family: var(--sans-serif);
  border-radius: 15px;
`;