import styled from "styled-components";
import HeaderInfo from "../components/HeaderInfo";
import Boss from "../components/Boss";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100%;
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
  ${mobile({
    marginTop: "70px",
  })}
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-top: 8%;
  text-shadow: 0 0 10px #000;
  text-transform: uppercase;
  text-align: center;
  ${tablet({
    fontSize: "2.5rem",
  })}
  ${mobile({
    fontSize: "2rem",
  })}
`;

const BossesInfo = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderInfo />
        <InnerTitle>
          <Title>Elden Ring - Bosses</Title>
        </InnerTitle>
        <Boss />
      </Wrapper>
    </Container>
  );
};

export default BossesInfo;
