import styled from "styled-components";
import Header from "../components/Header";
import Boss from "../components/Boss";

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 130vh;
  background-color: rgba(0, 0, 0, 1);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const InnerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-top: 3%;
  text-shadow: 0 0 10px #000;
  text-transform: uppercase;
`;

const BossesInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <InnerTitle>
          <Title>Elden Ring - Bosses</Title>
        </InnerTitle>
        <Boss />
      </Wrapper>
    </Container>
  );
};

export default BossesInfo;
