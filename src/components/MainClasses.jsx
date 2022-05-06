import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import ClassCard from "./ClassCard";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: rgba(0, 0, 0, 1);
`;

const Wrapper = styled.div`
  width: 100%;
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
  margin-top: 8%;
  text-shadow: 0 0 10px #000;
  text-transform: uppercase;
  text-align: center;
  ${tablet({
    fontSize: "2.5rem",
  })}
`;

const InnerSection = styled.div`
  margin-top: 1.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  ${tablet({
    flexWrap: "nowrap",
    overflowX: "auto",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0 50px",
    width: "90%",
  })}
  ${mobile({
    width: "80%",
    margin: "30px 0",
  })}
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
            marginTop: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#fff",
            fontSize: "3rem",
            backgroundColor: "rgba(0, 0, 0, 1)",
            width: "100%",
            height: "100vh",
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
