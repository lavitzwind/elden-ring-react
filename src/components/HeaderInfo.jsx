import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 50vh;
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

const Img = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  left: calc(50px + 1vw);
  margin: auto;
  max-width: 10%;
  height: auto;

  &:hover {
    cursor: pointer;
    filter: brightness(1.3);
  }
}
`;

const Arrow = styled.img`
  position: absolute;
  z-index: 1;
  bottom: -25px;
  left: calc(50px + 10vw);
  background-color: transparent;
  border-radius: 50%;
  color: #fff;
  padding: 10px;
  width: 30px;
  height: 30px;
  filter: invert(100%) sepia(40%) saturate(-0%) hue-rotate(87deg)
    brightness(119%) contrast(119%);

  &:hover {
    cursor: pointer;
    background-color: rgb(0 0 0/0.2);
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Video autoPlay loop muted>
        <source src="/assets/bg.webm" type="video/webm" />
      </Video>
      <Wrapper>
        <Link to="/">
          <Img src="/assets/logo.webp" alt="logo" />
        </Link>
        <Arrow
          onClick={() => navigate(-1)}
          src="/assets/left-arrow.svg"
          alt="left-arrow"
        />
      </Wrapper>
    </Container>
  );
};

export default Header;
