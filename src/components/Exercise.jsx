import { useState, useContext, useRef } from 'react';
import { InfoContext } from '../personal-info-context';
import Stopwatch from './Stopwatch';
import styled from 'styled-components';
import Modal from './Modal';
import LargerExercise from './LargerExercise';


const ExerciseContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  align-items: center;
`;
const ImgContainer = styled.div`
  border-radius: 50%;
  border: 1px solid #ddd;
  width: 160px;
  height: 160px; /* Set height to match width for a perfect circle */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
  margin-right: 20px;
`;

const Icon = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover; /* Maintain aspect ratio and cover the container */
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2, p {
    margin: 0
  }
`;

const StyledStopwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export default function Exercise({name, image, met, description, image_real}){

  // 원래는 prop으로 받은 pic를 가져와서 src로 설정하기 
  // 여기서 이제 칼로리 계산을 전부 해야 한다. 
  const { weight, addBurnedCal } = useContext(InfoContext);
  const modal = useRef();

  function handleClickExercise(){
    modal.current.open();
  }

  function calculateCalories(met){
    return (met * weight * 3.5 * 60 / 200).toFixed(2);
  };

  // 근데 이걸 매번 하게 되면 안된다. stopwatch에서 변화가 주어질때만 
  function handleExerciseTime(timespent){
    // timespend가 milli단위
    console.log(timespent);
    const caloriesBurned = met * 3.5 * weight * (timespent / 1000 / 60) / 200;
    console.log(weight);
    // 해당 운동에 따른 칼로리 소모가 기록됨
    addBurnedCal(caloriesBurned);
  };

  
  return (
    <>
    <Modal ref={modal}>
      <LargerExercise
        name={name}
        description={description}
        image={image_real}/>
    </Modal>
      <ExerciseContainer>
      <InfoContainer>
        <ImgContainer onClick={handleClickExercise}>
          <Icon src={image} alt="running-icon"/>
        </ImgContainer>
        <TextContainer>
          <h2>{name}</h2>
          <p>{calculateCalories(met)}kcal</p>
        </TextContainer>
      </InfoContainer>
      <StyledStopwatch>
        <Stopwatch onSet={handleExerciseTime}/>
      </StyledStopwatch>
    </ExerciseContainer>
    </>
  )
}