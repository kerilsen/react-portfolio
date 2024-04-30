import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
  width: 80%;
  margin: auto;
`;

export const GridItem = styled.article`
  padding: 10px;
  position: relative;
  opacity: 0.6;
  transition: opacity 0.7s;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  &:hover {
    opacity: 1;
    box-shadow: inset 0px 0px 8px rgba(242, 183, 177, 1),
      0 0 15px rgba(142, 113, 106, 1);
  }
`;

export const GridImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const AppTitle = styled.h3`
  position: absolute;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  z-index: 2;
  border-radius: 0px 50px 50px 0px;
  background-color: var(--white);
  opacity: 0.7;
  max-width: 23rem;
`;

export const Caption = styled.p`
  position: absolute;
  width: 100%;
  height: 2rem;
  bottom: 8px;
  background-color: var(--white);
  text-align: center;
  z-index: 2;
  opacity: 0.7;
  font-family: var(--script);
  text-transform: lowercase;
  font-size: 1.5em;
`;
