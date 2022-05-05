import styled from "styled-components";
import HeaderInfo from "../components/HeaderInfo";
import Class from "../components/Class";

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 155vh;
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

const ClassesInfo = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderInfo />
        <InnerTitle>
          <Title>Elden Ring - Classes</Title>
        </InnerTitle>
        <Class />
      </Wrapper>
    </Container>
  );
};

export default ClassesInfo;
