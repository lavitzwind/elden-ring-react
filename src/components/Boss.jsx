import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { CastRounded } from "@mui/icons-material";

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftSection = styled.div`
  width: 70%;
  height: 300px;
  padding: 0px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;
  }
`;

const RightSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #fff;
  background-color: #000;
  padding: 0 100px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 70%;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    font-size: 2rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-right: 10px;
  }
`;

const Drops = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 70%;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    font-size: 2rem;
  }

  p:after {
    content: ", ";
  }

  p:last-of-type:after {
    content: "";
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-right: 10px;
  }
`;

const HealthPoints = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 70%;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    font-size: 2rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-right: 10px;
  }
`;

const Class = () => {
  const [bossData, setBossData] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getClass = async () => {
      const URL = "https://eldenring.fanapis.com/api/bosses/" + id;
      try {
        const res = await axios.get(URL);
        setBossData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getClass();
  }, [id]);

  return (
    <Container>
      <LeftSection>
        <ImgContainer>
          <img src={bossData?.image} alt={bossData?.name} />
        </ImgContainer>
      </LeftSection>
      <RightSection>
        <h1>{bossData.name}</h1>
        <p>{bossData.description}.</p>
        <Location>
          <h2>Location:</h2>
          <p>{bossData.location}</p>
        </Location>
        <Drops>
          <h2>Drops:</h2>
          {bossData.drops?.map((drop) => (
            <p>{drop}</p>
          ))}
        </Drops>
        <HealthPoints>
          <h2>Health Points:</h2>
          <p>{bossData.healthPoints}</p>
        </HealthPoints>
      </RightSection>
    </Container>
  );
};

export default Class;
