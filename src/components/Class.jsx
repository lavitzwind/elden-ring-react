import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  width: 70%;
  height: 800px;
  padding-left: 50px;
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
    height: 100%;
  }
`;

const RightSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
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
const Stats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  padding-bottom: 40.25%;
  padding-top: 30px;
  margin-bottom: 30px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Class = () => {
  const [classData, setClassData] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getClass = async () => {
      const URL = "https://eldenring.fanapis.com/api/classes/" + id;
      try {
        const res = await axios.get(URL);
        setClassData(res.data.data);
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
          <img src={classData?.image} alt={classData?.name} />
        </ImgContainer>
      </LeftSection>
      <RightSection>
        <h1>{classData.name}</h1>
        <p>{classData.description}.</p>
        <h2>Stats:</h2>
        <Stats>
          <div>
            <p>Arcane: {classData.stats?.arcane}</p>
            <p>Dexterity: {classData.stats?.dexterity}</p>
          </div>
          <div>
            <p>endurance: {classData.stats?.strength}</p>
            <p>Intelligence: {classData.stats?.inteligence}</p>
          </div>
          <div>
            <p>Strength: {classData.stats?.strength}</p>
            <p>Vigor: {classData.stats?.vigor}</p>
          </div>
          <div>
            <p>Mind: {classData.stats?.mind}</p>
            <p>Faith: {classData.stats?.faith}</p>
          </div>
        </Stats>
        <VideoContainer>
          <iframe
            width="760"
            height="400"
            src="https://www.youtube.com/embed/I6ZZFZcnc-k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>
      </RightSection>
    </Container>
  );
};

export default Class;
