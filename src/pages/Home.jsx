import { useState } from "react";
import styled from "styled-components";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
`;

const VideoContainer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(40%);
  z-index: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Img = styled.img`
  z-index: 1;
  margin-top: -130px;
  max-width: 100%;
  height: auto;
`;

const Btn = styled.div`
  color: white;
  -webkit-text-decoration: none;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 18px;
  border: 2px solid #ffffff55;
  text-align: center;
  padding: 24px 50px;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  border-radius: 15px;
  z-index: 1;
  &:hover {
    color: black;
    border: 3px solid #fff;
    background: #fff;
    cursor: pointer;
  }
`;

const TheGameOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1;
  display: flex;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 0.7s;
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BtnClose = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Inner = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 30px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-height: 400px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1.4px 1.7px rgb(0 0 0 / 2%), 0 3.3px 4px rgb(0 0 0 / 2%),
    0 6.3px 7.5px rgb(0 0 0 / 3%), 0 11.2px 13.4px rgb(0 0 0 / 4%),
    0 20.9px 25.1px rgb(0 0 0 / 4%), 0 50px 60px rgb(0 0 0 / 6%);

  img {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.9s ease-in-out;
  }

  h3 {
    top: 50%;
    transform: translate3d(0, -40px, 40px);
    text-align: center;
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 0;
    letter-spacing: 5px;
    position: absolute;
    color: #fff;
    z-index: 1;
    max-width: 200px;
    transition: opacity 0.2s, transform 0.3s;
  }

  &:hover img {
    transition: all 0.9s ease-in-out;
    filter: brightness(30%);
    transform: scale(1.3);
    cursor: pointer;
  }

  &:hover h3 {
    transition: all 0.9s ease-in-out;
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <VideoContainer autoPlay loop muted>
        <source src="assets/bg.webm" type="video/webm" />
      </VideoContainer>
      <Wrapper>
        <Img src="assets/logo.webp" alt="logo" />
        <Btn onClick={() => setOpen(!open)}>The Game</Btn>
      </Wrapper>
      <TheGameOverlay
        onClick={() => setOpen(!open)}
        style={{ display: open ? "flex" : "none" }}
      >
        <BtnClose>
          <CloseRoundedIcon
            sx={{
              color: "white",
              width: "100%",
              height: "100%",
            }}
          />
        </BtnClose>
        <Inner>
          <UnorderedList>
            <ListItem>
              <Link
                to="/about"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <img src="assets/about.jpg" alt="about" />
                <h3>ABOUT</h3>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/classes"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <img src="assets/classes.jpg" alt="classes" />
                <h3>CLASSES</h3>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/locations"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <img src="assets/locations.jpg" alt="locations" />
                <h3>LOCATIONS</h3>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/bosses"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <img src="assets/bosses.jpg" alt="bosses" />
                <h3>BOSSES</h3>
              </Link>
            </ListItem>
          </UnorderedList>
        </Inner>
      </TheGameOverlay>
    </Container>
  );
};

export default Home;
