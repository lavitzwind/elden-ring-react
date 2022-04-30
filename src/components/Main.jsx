import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-image: url("assets/mainBG.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  max-width: 90%;
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
  margin-top: 5%;
  text-shadow: 0 0 10px #000;
  text-transform: uppercase;
`;

const Info = styled.div`
  display: flex;
  p {
    color: #c19d53 !important;
  }
  p + p {
    margin-left: 20px;
  }
  span {
    color: #fff;
  }
`;

const ContainerSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  gap: 50px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;

  text-align: left;
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 10px #000;
  }
  p {
    color: #fff;
    font-size: 1.2rem;
    text-shadow: 0 0 10px #000;
  }
`;

const RightSection = styled.video`
  width: 60%;
  margin-top: 30px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
`;

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <InnerTitle>
          <Title>elden ring</Title>
          <Info>
            <p>
              Release Date: <span>25/02/2022</span>
            </p>
            <p>
              Genres: <span>RPG</span>
            </p>
            <p>
              Developer: <span>FromSoftware, Inc</span>
            </p>
          </Info>
        </InnerTitle>
        <ContainerSection>
          <LeftSection>
            <h2>The Golden Order has been broken.</h2>
            <p>
              Rise, Tarnished, and be guided by grace to brandish the power of
              the Elden Ring and become an Elden Lord in the Lands Between.
            </p>
            <p>
              In the Lands Between ruled by Queen Marika the Eternal, the Elden
              Ring, the source of the Erdtree, has been shattered.
            </p>
            <p>
              Marika's offspring, demigods all, claimed the shards of the Elden
              Ring known as the Great Runes, and the mad taint of their newfound
              strength triggered a war: The Shattering. A war that meant
              abandonment by the Greater Will.
            </p>
            <p>
              And now the guidance of grace will be brought to the Tarnished who
              were spurned by the grace of gold and exiled from the Lands
              Between. Ye dead who yet live, your grace long lost, follow the
              path to the Lands Between beyond the foggy sea to stand before the
              Elden Ring.
            </p>
            <p>And become the Elden Lord.</p>
          </LeftSection>
          <RightSection autoPlay loop muted>
            <source src="assets/trailer.webm" type="video/webm" />
          </RightSection>
        </ContainerSection>
      </Wrapper>
    </Container>
  );
};

export default Main;
