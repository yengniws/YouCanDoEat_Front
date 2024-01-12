//Search.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosAddCircleOutline } from "react-icons/io";
import styled from 'styled-components';

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

  button {
    border: none;
    background-color: inherit;
    margin-right: 20px;
  }
`;


const Search = () => {
  const [query, setQuery] = useState('');  //검색어 저장 상태 변수
  const [searchResults, setSearchResults] = useState([]);  //검색 결과 상태 변수
  const serverAddress = 'http://211.115.83.214';  //서버 주소 저장, 실제 서버 주소 넣기

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {

        const response = await axios.get(`${serverAddress}/api/searchFoods`, { //실제 엔드포인트 넣기
          params: { query },
        });

        const results = response.data;
        setSearchResults(results);

      } catch (error) {
        console.error('API 호출 중 오류:', error);
      }
    };

    fetchSearchResults();
  }, [query, serverAddress]);

  return (
    <SearchWrap>
      <p>지금 가장 먹고 싶은 음식은?</p>
      <input type="text" placeholder="음식을 검색하세요!" value={query} onChange={(e) => setQuery(e.target.value)}/>
      <FoodList>
        {searchResults.map((food) => (
          <FoodItem key={food.id}>
            <div>{food.name} (1인분 기준)</div> 
            <div>
              <div className='nutrition'>지방:{food.fat}</div>  
              <div className='nutrition'>탄수화물:{food.carb}</div> 
              <div className='nutrition'>단백질:{food.protein}</div>
              <div className='cal'>칼로리:{food.cal}</div>
            </div>
            <button><IoIosAddCircleOutline size={60} color='blue'/></button>
            {/* 버튼 누르면 칼로리 음식 이름+칼로리 넘어가도록 구현 */}
 
          </FoodItem>
        ))}
      </FoodList>
    </SearchWrap>
  );
};

export default Search;