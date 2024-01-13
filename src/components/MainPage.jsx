import { EXERCISES_INFO } from "../exercises-info"
import Exercise from "./Exercise";
import styled from "styled-components";
import Header from './Header';

const MainPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  min-height: 100vh; /* Set minimum height to 100% of the viewport height */  
`;
const StyledMainPage = styled.section`
  display: flex;
  align-items: center;
`;

const ListedExercises = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
`;

export default function MainPage(){
  return (
    <MainPageStyle>
    <Header/>
      <StyledMainPage>
      <ListedExercises>
        {EXERCISES_INFO.map((exercise) => 
          <li key={exercise.id}>
            <Exercise
              key={exercise.id}
              name={exercise.name}
              image={exercise.image}
              met={exercise.met}
              image_real={exercise.image_real}
              description={exercise.description}/>
          </li>)}
      </ListedExercises>
    </StyledMainPage>
    </MainPageStyle>
  )
}