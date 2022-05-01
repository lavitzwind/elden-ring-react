import styled from "styled-components";
import Header from "../components/Header";
import MainAbout from "../components/MainAbout";

const Container = styled.div`
  overflow: hidden;
`;

const About = () => {
  return (
    <Container>
      <Header />
      <MainAbout />
    </Container>
  );
};

export default About;
