import styled from "styled-components";
import { Link } from "react-router-dom";

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

  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 10px rgb(200 200 200 / 20%);
    filter: brightness(1.25);
  }
`;

const ClassCard = ({ item }) => {
  return (
    <Container>
      <Link to={`/classes/${item.id}`}>
        <img src={item.image} alt={item.name} />
      </Link>
    </Container>
  );
};

export default ClassCard;
