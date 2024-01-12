import { useState, useEffect, useContext, useRef } from "react"
import { InfoContext } from "../personal-info-context";
import AcheivedModal from "./AcheivedModal";
import trophyImg from "../assets/img/trophy.png"
import styled from "styled-components";

const StyledProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 80%; /* Adjust the width according to your design */
  margin-left: 100px; /* Center the progress bar and image */
`;

const StyledButton = styled.button`
  margin: 10px;
  background-color: black;
  color: white;
`;

const Progress = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  --color: blue;
  --background: lightgrey;

  width: 200px;
  margin: 0 10px;

  &::-webkit-progress-bar {
    border-radius: 10em;
    background: var(--background);
  }

  &::-webkit-progress-value {
    border-radius: 10em;
    background: var(--color);
  }
  width: 70%; /* Adjust the width of the progress bar */
  margin-right: 10px; /* Adjust the spacing between progress bar and image */

`;

const TrophyImage = styled.img`
  width: 70px; /* Adjust the width of the trophy image */
`;

export default function ProgressBar(){
  // totalBurnedCalories를 반영하여 progressbar을 표시해야 한다. 
  // 선택한 제품의 전체 칼로리 표시 
  const {totalBurnedCalories, foodCalories, foodName} = useContext(InfoContext);
  const [burnedPercentage, setBurnedPercentage] = useState(0);
  const [finished, setFinished] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenTrophyClick(){
    setModalOpen(true);
    console.log(modalOpen);
  }

  function handleCloseModal(){
    setModalOpen(false);
  }
  // 지금 원하는 바는 totalBurnedCalories가 바뀔때마다, 이 progressbar이 update되기를 
  useEffect(() => {
    console.log(totalBurnedCalories);
    const newPercentage = totalBurnedCalories / foodCalories * 100;
  
    if(newPercentage >= 100) {
      setFinished(true);
      console.log("You are done!");
    }
    setBurnedPercentage(newPercentage);
  }, [totalBurnedCalories]);

  return (
    <>
      {modalOpen &&  <AcheivedModal 
        foodName={foodName}
        onSet={handleCloseModal}/> }
      <StyledProgressBar>
        <Progress value={burnedPercentage} max={100}/>
        <TrophyImage src={trophyImg} alt="trophyimg" />
        {finished && <StyledButton onClick={handleOpenTrophyClick}>Reward</StyledButton>}
      </StyledProgressBar>
    </>
    
  )
}