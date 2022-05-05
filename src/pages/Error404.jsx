import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  overflow: hidden;
`;

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 50vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 0 0 10px #000;
    text-transform: uppercase;
  }
`;

const Error404 = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <div>Error404</div>
      </Wrapper>
    </Container>
  );
};

export default Error404;
