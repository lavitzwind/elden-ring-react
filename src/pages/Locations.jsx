import styled from "styled-components";
import Header from "../components/Header";
import MainLocations from "../components/MainLocations";

const Container = styled.div`
  overflow: hidden;
`;

const Locations = () => {
  return (
    <Container>
      <Header />
      <MainLocations />
    </Container>
  );
};

export default Locations;
