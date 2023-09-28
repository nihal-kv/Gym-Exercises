import HorizontalScrollBar from './HorizontalScrollBar';
import './SearchExercises.css';

import React, { useEffect, useState } from 'react'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch]=useState('');
  const [bodyParts, setBodyParts]=useState([]);

  const changeHandler=(event)=>{
    setSearch(event.target.value.toLowerCase());
  }

  

  const url = 'https://exercisedb.p.rapidapi.com/exercises';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd963918a82msh728d6f952f3e926p10e199jsnf084ff40744f',
      
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

  useEffect(()=>{
    const fetchBodyParts=async ()=>{
      const result=await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
      const data=await result.json();

      setBodyParts(['all', ...data]);
      
    }

    fetchBodyParts();
  }, [])

  const searchHandler=async()=>{
    if(search)
    {
      const response = await fetch(url, options);
      const result = await response.json();
      
      const searchedExercises=result.filter((exercise)=>{
        return  exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      })

      setSearch('');
      setExercises(searchedExercises);
    }

    
  }
  return (
    <div className='searchExercises'>

      <h2 className='searchExercises__heading'>Awesome Exercises You<br/> Should Know</h2>
      <div className='searchExercises__div'>
        <input type='text' placeholder='Search Exercises' value={search} onChange={changeHandler} className='searchExercises__input' />
        <button className='searchExercises__button' onClick={searchHandler}>Search</button>
      </div>
      <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      
    </div>
  )
}

export default SearchExercises
