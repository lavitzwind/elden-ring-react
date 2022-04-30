import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";

const Container = styled.div`
  overflow-x: hidden;
`;

const About = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default About;
