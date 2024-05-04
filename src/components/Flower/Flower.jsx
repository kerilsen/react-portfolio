import styled from 'styled-components';

const MainCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  margin-left: 33.3%;
  margin-top: 33.3%;
  justify-content: center;
  align-items: center;
`;

const SmallCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #E9B872;
  border-radius: 50%;
  border: 3px dotted var(--taupe);
  position: absolute;
`;

const SmallCircle1 = styled(SmallCircle)`
  top: 10px;
  left: 11px;
`;

const SmallCircle2 = styled(SmallCircle)`
  top: 10px;
  right: 12px;
`;

const SmallCircle3 = styled(SmallCircle)`
  bottom: 8px;
  left: 15px;
`;

const SmallCircle4 = styled(SmallCircle)`
  bottom: 13px;
  right: 10px;
`;

const SmallCircle5 = styled(SmallCircle)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Stamen() {
  return (
      <MainCircle>
        <SmallCircle1 />
        <SmallCircle2 />
        <SmallCircle3 />
        <SmallCircle4 />
        <SmallCircle5 />
      </MainCircle>
  );
}