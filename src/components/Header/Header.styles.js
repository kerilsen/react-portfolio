import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const LogoContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 100px;
  margin-left: 100px;
  text-align: center;
  // @media screen and (max-width: 600px) {
  //   width: 100%;
  // }
`;

export const BannerTitle = styled.h1`
  font-family: var(--script);
  font-size: 4.5rem;
  line-height: 40%;
  margin: auto;
  color: white;
`;

export const FlowerContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: 100px;
  margin-top: 100px;
  font-family: var(--sans-serif);
  // @media screen and (max-width: 600px) {
  //   width: 100%;
  // }
`;
