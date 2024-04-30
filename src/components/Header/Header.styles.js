import styled from "styled-components";

export const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 100px;
  margin-left: 100px;
  text-align: center;
`;

export const BannerTitle = styled.h1`
  font-family: var(--script);
  font-size: 4.5rem;
  line-height: 40%;
  margin: auto;
  color: white;
`;

export const NavBar = styled.div`
  background-color: var(--mauve);
  opacity: 0.5;
  width: 100%;
`;
