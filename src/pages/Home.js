import Banner from '../components/Banner';
import Exercises from '../components/Exercises';
import Header from '../components/Header';
import SearchExercises from '../components/SearchExercises';
import { AppContext } from '../context/AppContext';
import './Home.css';

import React, { useContext, useState } from 'react'

const Home = () => {
  const [exercises, setExercises]=useState([]);
  const [bodyPart, setBodyPart]=useState('all');
  const {isLoggedIn}=useContext(AppContext);

  console.log(bodyPart)
  return (
    <div className='home'>
      <Header/>
      <Banner/>
      {isLoggedIn && <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />}
      {isLoggedIn && <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>}
    </div>
  )
}

export default Home
