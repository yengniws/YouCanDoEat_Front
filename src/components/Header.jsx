import ProgressBar from "./ProgressBar"
import styled from "styled-components"
import foodIcon from "../assets/img/food-restaurant-icon.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 15%;
`;

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 5rem;
    margin-right: 1.5rem;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5rem;
  }
`;

export default function Header(){
  return (
    <>
      <StyledHeader>
        <MainTitle>
          <img src={foodIcon} alt="foodIcon" />
          <h1>You Can Do Eat!</h1>
        </MainTitle>
        <ProgressBar/>
    </StyledHeader>
    </>
  )
}