import styled from "styled-components";
import { Link } from "react-router-dom";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 10px 10px;
  flex-direction: column;
  box-shadow: 0 6px 10px rgb(200 200 200 / 10%);
  border-radius: 10px;
  margin: 20px;
  ${tablet({
    width: "50%",
    flex: "0 0 auto",
    margin: "80px 10px",
    height: "auto",
  })}
  ${mobile({
    width: "90%",
    flex: "0 0 auto",
    margin: "110px 10px",
    height: "auto",
  })}

  img {
    width: 100%;
    height: 170px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    margin-top: 3%;
    text-shadow: 0 0 10px #000;
    text-transform: uppercase;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 10px rgb(200 200 200 / 20%);
    filter: brightness(1.25);
  }
`;

const BossesCard = ({ item }) => {
  return (
    <Container>
      <Link
        to={`/bosses/${item?.id}`}
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={item?.image} alt={item?.name} />
        {<h3>{item?.name}</h3>}
      </Link>
    </Container>
  );
};

export default BossesCard;
