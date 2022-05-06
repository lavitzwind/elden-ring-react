import styled from "styled-components";
import Header from "../components/Header";
import MainClasses from "../components/MainClasses";

const Container = styled.div`
  overflow: hidden;
  background-color: #000;
  width: 100%;
  height: 100%;
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
