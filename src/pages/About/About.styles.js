import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  margin: 0 auto;
  color: white;
`;

export const Logo = styled.img`
  flex-shrink: 0;
  width: 200px;
  height: auto;
  margin: auto;
`;

export const SmallCard = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
`;

export const BigCard = styled.div`
  flex: 2;
  background-color: rgba(0, 0, 0, 0.3);
  min-width: 400px;
  padding: 20px;
  border-radius: 15px;
`;
