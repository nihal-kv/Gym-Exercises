import Banner from '../components/Banner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import './Home.css';

import React, { useState } from 'react'

const Home = () => {
  const [exercises, setExercises]=useState([]);
  const [bodyPart, setBodyPart]=useState('all');

  console.log(bodyPart)
  return (
    <div className='home'>
      <Banner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </div>
  )
}

export default Home
