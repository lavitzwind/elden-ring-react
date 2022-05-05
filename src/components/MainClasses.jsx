import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import ClassCard from "./ClassCard";

const Container = styled.div`
  width: 100vw;
  height: 215vh;
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

const MainClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getClasses = async () => {
      const URL = "https://eldenring.fanapis.com/api/classes";
      try {
        setLoading(true);
        const res = await axios.get(URL);
        setClasses(
          res.data.data.filter((elem, index, self) => {
            return index === self.findIndex((t) => t.name === elem.name);
          })
        );
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getClasses();
  }, []);

  return (
    <Container>
      {loading ? (
        <div
          style={{
            marginTop: "3%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "3rem",
          }}
        >
          Loading...
        </div>
      ) : (
        <Wrapper>
          <InnerTitle>
            <Title>Elden Ring - Classes</Title>
          </InnerTitle>
          <InnerSection>
            {classes.map((item) => (
              <ClassCard key={item.id} item={item} />
            ))}
          </InnerSection>
        </Wrapper>
      )}
    </Container>
  );
};

export default MainClasses;
