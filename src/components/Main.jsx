import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-image: url("assets/mainBG.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
`;

const Title = styled.div``;

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Title></Title>
      </Wrapper>
    </Container>
  );
};

export default Main;
