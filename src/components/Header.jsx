import styled from "styled-components";

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
  top: 440px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  height: auto;
}
`;

const Header = () => {
  return (
    <Container>
      <Video autoPlay loop muted>
        <source src="/assets/bg.webm" type="video/webm" />
      </Video>
      <Wrapper>
        <Img src="/assets/logo.webp" alt="logo" />
      </Wrapper>
    </Container>
  );
};

export default Header;
