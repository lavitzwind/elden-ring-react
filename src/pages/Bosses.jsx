import styled from "styled-components";
import Header from "../components/Header";
import MainBosses from "../components/MainBosses";

const Container = styled.div`
  overflow: hidden;
  background-color: #000;
  width: 100%;
  height: 100%;
`;

const Bosses = () => {
  return (
    <Container>
      <Header />
      <MainBosses />
    </Container>
  );
};

export default Bosses;
