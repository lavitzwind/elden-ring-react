import styled from "styled-components";
import Header from "../components/Header";
import MainBosses from "../components/MainBosses";

const Container = styled.div`
  overflow: hidden;
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
