import styled from "styled-components";
import { Link } from "react-router-dom";
import { desktop, tablet, mobile } from "../responsive";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 50vh;
  ${tablet({
    height: "30vh",
  })}
  ${mobile({
    height: "20vh",
  })}
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: 0;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.img`
  position: absolute;
  z-index: 1;
  top: calc(110% - 50px);
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  height: auto;
  ${desktop({
    maxWidth: "50%",
  })}
  ${tablet({
    bottom: "-20px",
  })}

  &:hover {
    cursor: pointer;
    filter: brightness(1.3);
  }
`;

const Arrow = styled.img`
  position: absolute;
  z-index: 1;
  bottom: -25px;
  left: calc(30px + 5%);
  background-color: transparent;
  border-radius: 50%;
  color: #fff;
  padding: 10px;
  width: 30px;
  height: 30px;
  filter: invert(100%) sepia(40%) saturate(-0%) hue-rotate(87deg)
    brightness(119%) contrast(119%);
  ${mobile({
    left: "calc(10px + 5%)",
    bottom: "-20px",
    width: "20px",
    height: "20px",
  })}

  &:hover {
    cursor: pointer;
    background-color: rgb(0 0 0/0.2);
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

const Header = () => {
  return (
    <Container>
      <Video autoPlay loop muted>
        <source src="/assets/bg.webm" type="video/webm" />
      </Video>
      <Wrapper>
        <Link to="/">
          <Logo src="/assets/logo.webp" alt="logo" />
        </Link>
        <Link to="..">
          <Arrow src="/assets/left-arrow.svg" alt="left-arrow" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Header;
