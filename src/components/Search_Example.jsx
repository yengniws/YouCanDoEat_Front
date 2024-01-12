//Search_example.jsx

import React, { useState, useEffect } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { InfoContext } from '../personal-info-context';

const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  p {
    margin-top: 100px;
    padding: 30px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }

  input {
    width: 1000px;
    height: 60px;
    border: 2px solid rgb(224, 224, 224);
    border-radius: 20px;
    align-items: center;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const FoodList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FoodItem = styled.li`
  display: flex;
  /* justify-content: space-between; */
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-bottom: 30px;
  padding: 10px;
  width: 1300px;
  height: 130px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .name {
    font-weight: bold;
    font-size: 25px;
    padding: 15px;
    width: 400px;
}

.wrap {
    border-radius: 20px;
    font-size: 20px;
    width: 140px;
    height: 110px;
    padding-top: 20px;
    text-align: center;
    margin: auto 0;
    background-color: rgba(108, 176, 248, 0.1);
    color: rgb(106, 106, 106);
    margin-left: 600px;
    margin-right: 25px;
}

.cal {
    font-weight: bold;
    color: rgb(65, 65, 65);
}
`;

const StyledButton = styled(Link)`
  border: none;
  background-color: inherit;
  margin-right: 20px;

`;

// API 정보 예시 (실제로는 서버 API와 통신)
const mockAPI = {
  searchFoods: (query) => {
    const foods = [
      { id: 1, name: '피자', cal: 800, fat: 20, carb: 120, protein: 30 },
      { id: 2, name: '스테이크', cal: 600, fat: 30, carb: 10, protein: 40 },
      { id: 3, name: '샐러드', cal: 200, fat: 5, carb: 15, protein: 10 },
    ];

    const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(query.toLowerCase()));

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredFoods);
      }, 0);
    });
  },
};

const Search_example = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const {changeNameCal} = useContext(InfoContext);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const results = await mockAPI.searchFoods(query);
        setSearchResults(results);
      } catch (error) {
        console.error('API 호출 중 오류:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  function handleChangeUpdate(){
    
  }
  return (
    <SearchWrap>
      <p>지금 가장 먹고 싶은 음식은?</p>
      <input type="text" placeholder="음식을 검색하세요!" value={query} onChange={(e) => setQuery(e.target.value)}/>
      <FoodList>
        {searchResults.map((food) => (
          <FoodItem key={food.id}>
            <div className='name'>{food.name} (1인분 기준)</div> 
            <div className='wrap'>
              <div className='nutrition'>지방:{food.fat}</div>  
              <div className='nutrition'>탄수화물:{food.carb}</div> 
              <div className='nutrition'>단백질:{food.protein}</div>
              <div className='cal'>칼로리:{food.cal}</div>
            </div>
            <StyledButton 
              onClick={() => changeNameCal(food.name, food.cal)}
              to="/main"
              ><IoIosAddCircleOutline size={60} color='blue'/></StyledButton>
          </FoodItem>
        ))}
      </FoodList>
    </SearchWrap>
  );
};

export default Search_example;