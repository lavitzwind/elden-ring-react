import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
  max-width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpperSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 70%;
  text-align: center;

  h2 {
    color: #fff;
    z-index: 1;
    font-size: 2.5rem;
    margin-bottom: 20px;
    ${tablet({
      fontSize: "2rem",
    })}
  }
`;

const ImgContainer = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${tablet({
    width: "100%",
  })}

  img {
    width: 100%;
    max-height: 400px;
    ${mobile({
      width: "130%",
    })}
  }
`;

const LowerSection = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  text-align: center;
  height: 30%;
  margin-top: 20px;
  ${tablet({
    width: "100%",
    marginBottom: "120px",
  })}
  ${mobile({
    marginBottom: "110px",
  })} 

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p{
    font-size: 1.5rem;
    text-center;
  }
`;

const Location = () => {
  const [locationData, setLocationData] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getLocation = async () => {
      const URL = "https://eldenring.fanapis.com/api/locations/" + id;
      try {
        const res = await axios.get(URL);
        setLocationData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLocation();
  }, [id]);

  return (
    <Container>
      <UpperSection>
        <h2>{locationData?.name}</h2>
        <ImgContainer>
          <img src={locationData?.image} alt={locationData?.name} />
        </ImgContainer>
      </UpperSection>
      <LowerSection>
        <h3>Region: {locationData?.region}</h3>
        <p>{locationData?.description}.</p>
      </LowerSection>
    </Container>
  );
};

export default Location;
