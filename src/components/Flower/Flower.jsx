import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 200px;
`;

const MainCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #E9B872;
  border-radius: 50%;
  position: absolute;
`;

const SmallCircle1 = styled(SmallCircle)`
  top: 10px;
  left: 10px;
`;

const SmallCircle2 = styled(SmallCircle)`
  top: 10px;
  right: 10px;
`;

const SmallCircle3 = styled(SmallCircle)`
  bottom: 10px;
  left: 10px;
`;

const SmallCircle4 = styled(SmallCircle)`
  bottom: 10px;
  right: 10px;
`;

const SmallCircle5 = styled(SmallCircle)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Stamen() {
  return (
    <Container>
      <MainCircle>
        <SmallCircle1 />
        <SmallCircle2 />
        <SmallCircle3 />
        <SmallCircle4 />
        <SmallCircle5 />
      </MainCircle>
    </Container>
  );
}