import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { InfoContext } from '../personal-info-context';
import { useContext, useRef, useState } from 'react';


const UserInfoForm = styled.form`
  p{
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 60px;
    margin-top: 120px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  height: 100%

`;

const InputContainer = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    font-size:30px;
  }

  input {
    border-radius: 20px;
    width: 400px;
    height: 70px;
    border: 2px solid rgb(224, 224, 224);
    font-size: 30px;
    margin: 10px;
    font-weight: bold;
  }

  input:focus {
    outline: none;
  }

  select {
    width: 405px;
    height: 70px;
    border-radius: 20px;
    border: 2px solid rgb(224, 224, 224);
    font-size: 20px;
    margin: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 35px;
  text-align: center;

`;

const CompleteButton = styled(Link)`
  display: inline-block;
  padding: 15px 20px;
  background-color: rgb(235, 235, 235);
  text-decoration: none;
  color:black;
  border-radius: 10px;
  font-weight:bold;
  width:200px;

  &:hover {
    background-color: blue;
    color: white;
  }
  
`;

function UserInfo() {
  // 내가 지금 해야 하는게 이 몸무게 정보를 ContextAPI에 연결하기 

  const { changeWeight } = useContext(InfoContext);
  const weight = useRef();
  const navigate = useNavigate();
  function handleChangeUpdate(){
    changeWeight(weight.current.value);
    navigate("/nutrition");
  };

  return (
    <UserInfoForm>
      <p>신체 정보를 입력해주세요!</p>

      <InputContainer>
        <label>키</label>
        <input type="number" name="height" />
      </InputContainer>

      <InputContainer>
        <label>몸무게</label>
        <input type="number" name="weight" ref={weight}/>
      </InputContainer>

      <InputContainer>
        <label>성별</label>
        <select name="sex">
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </InputContainer>

      <InputContainer>
        <label>나이</label>
        <input type="text" name="age" />
      </InputContainer>

      <ButtonContainer>
        <CompleteButton 
          to="/nutrition" 
          onClick={handleChangeUpdate}>
          완료🔥
        </CompleteButton>
      </ButtonContainer>
    </UserInfoForm>
  );
}

export default UserInfo;
