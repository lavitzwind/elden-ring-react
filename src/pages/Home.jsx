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
  position: relative;
  overflow: hidden;
  width: 25%;
  height: 50%;

  img {
    width: 100%;
    height: 100%;
    transition: transform 2s, filter 1.5s ease-in-out;
    transform-origin: center center;
    filter: brightness(100%);

    &:hover {
      filter: brightness(30%);
      transform: scale(1.3);
      cursor: pointer;
    }
  }

  h3 {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;

    &:hover {
      background: #000;
      opacity: 0.5;
      content: "";
      cursor: pointer;
      transform: translate(-50%, -50%) scale(1.1);
      transition: transform 1s, filter 1.5s ease-in-out;
    }
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
              <Link to="/about">
                <img src="assets/about.jpg" alt="about" />
                <h3>ABOUT</h3>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/classes">
                <img src="assets/classes.jpg" alt="classes" />
                <h3>CLASSES</h3>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/locations">
                <img src="assets/locations.jpg" alt="locations" />
                <h3>LOCATIONS</h3>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/bosses">
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
