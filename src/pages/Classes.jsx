import styled from "styled-components";
import Header from "../components/Header";
import MainClasses from "../components/MainClasses";

const Container = styled.div`
  overflow: hidden;
`;

const Classes = () => {
  return (
    <Container>
      <Header />
      <MainClasses />
    </Container>
  );
};

export default Classes;
