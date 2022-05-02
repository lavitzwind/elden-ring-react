import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import ClassCard from "./ClassCard";
import LocationsCard from "./LocationsCard";

const Container = styled.div`
  width: 100vw;
  height: 185vh;
  background-color: rgba(0, 0, 0, 1);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const InnerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-top: 3%;
  text-shadow: 0 0 10px #000;
  text-transform: uppercase;
`;

const InnerSection = styled.div`
  margin-top: 1.5%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin-top: 30px;

  span {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 8px;
    background-color: rgba(221, 96, 96, 0.4);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.6s ease;
    transform: scale(1);
  }
`;

const MainLocations = () => {
  const [locations, setLocations] = useState([]);
  const [dotActive, setDotActive] = useState(0);

  useEffect(() => {
    const getLocations = async () => {
      const URL = "https://eldenring.fanapis.com/api/locations?limit=20";
      try {
        const res = await axios.get(URL);
        setLocations(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLocations();
  }, []);

  const getLocationByIndex = async (index) => {
    const URL = `https://eldenring.fanapis.com/api/locations?limit=20&page=${index}`;
    try {
      const res = await axios.get(URL);
      setLocations(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDotClick = (index) => {
    setDotActive(index);
    getLocationByIndex(index);
  };

  console.log(locations);

  return (
    <Container>
      <Wrapper>
        <InnerTitle>
          <Title>Elden Ring - Locations</Title>
        </InnerTitle>
        <InnerSection>
          {locations.map((location) => (
            <LocationsCard item={location} />
          ))}
        </InnerSection>
        <DotContainer>
          <span
            style={{
              backgroundColor:
                dotActive === 0
                  ? "rgba(221, 96, 96, 1)"
                  : "rgba(221, 96, 96, 0.4)",
              transform: dotActive === 0 ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => handleDotClick(0)}
          ></span>
          <span
            style={{
              backgroundColor:
                dotActive === 1
                  ? "rgba(221, 96, 96, 1)"
                  : "rgba(221, 96, 96, 0.4)",
              transform: dotActive === 1 ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => handleDotClick(1)}
          ></span>
          <span
            style={{
              backgroundColor:
                dotActive === 2
                  ? "rgba(221, 96, 96, 1)"
                  : "rgba(221, 96, 96, 0.4)",
              transform: dotActive === 2 ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => handleDotClick(2)}
          ></span>
          <span
            style={{
              backgroundColor:
                dotActive === 3
                  ? "rgba(221, 96, 96, 1)"
                  : "rgba(221, 96, 96, 0.4)",
              transform: dotActive === 3 ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => handleDotClick(3)}
          ></span>
          <span
            style={{
              backgroundColor:
                dotActive === 4
                  ? "rgba(221, 96, 96, 1)"
                  : "rgba(221, 96, 96, 0.4)",
              transform: dotActive === 4 ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => handleDotClick(4)}
          ></span>
          <span
            style={{
              backgroundColor:
                dotActive === 5
                  ? "rgba(221, 96, 96, 1)"
                  : "rgba(221, 96, 96, 0.4)",
              transform: dotActive === 5 ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => handleDotClick(5)}
          ></span>
          <span
            style={{
              backgroundColor:
                dotActive === 6
                  ? "rgba(221, 96, 96, 1)"
                  : "rgba(221, 96, 96, 0.4)",
              transform: dotActive === 6 ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => handleDotClick(6)}
          ></span>
          <span
            style={{
              backgroundColor:
                dotActive === 7
                  ? "rgba(221, 96, 96, 1)"
                  : "rgba(221, 96, 96, 0.4)",
              transform: dotActive === 7 ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => handleDotClick(7)}
          ></span>
        </DotContainer>
      </Wrapper>
    </Container>
  );
};

export default MainLocations;