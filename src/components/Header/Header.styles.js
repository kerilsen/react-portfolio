import styled from "styled-components";

export const TopBanner = styled.header`
  // background-image: url("./assets/bg-image.jpg");
  width: 100%;
  height: 15%;
  // background-size: cover;
  // background-position: center;
  position: relative;
  color: white;
  padding: 50px;
  text-align: center;
`;

export const BannerTitle = styled.h1`
  font-family: var(--script);
  font-size: 3.5rem;
  line-height: 40%;
  padding-top: 1rem;
  margin: 0;
`;

export const NavBar = styled.div`
  background-color: var(--mauve);
  opacity: 0.5;
  width: 100%;
`;
