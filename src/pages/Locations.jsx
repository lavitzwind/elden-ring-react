import styled from "styled-components";
import Header from "../components/Header";
import MainLocations from "../components/MainLocations";

const Container = styled.div`
  overflow: hidden;
  background-color: #000;
  width: 100%;
  height: 100%;
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
