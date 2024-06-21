import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import './ExerciseDetails.css';

import React, { useEffect, useState } from 'react'

const ExerciseDetails = () => {

  const [exerciseDetail, setExerciseDetail]=useState({});
  const [exerciseVideos, setExerciseVideos]=useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises]=useState([]);
  const [equipmentExercises, setEquipmentExercises]=useState([]);
  const {id}=useParams();

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '48a4968fd0mshd43be65cb20f191p150dd5jsn81f51b96023f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '48a4968fd0mshd43be65cb20f191p150dd5jsn81f51b96023f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


  useEffect(()=>{
    const fetchExercisesData=async()=>{
        const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailResponse=await fetch(`${exerciseDbUrl}/exercises/exercise/${id}`, options);
        const exerciseDetailData=await exerciseDetailResponse.json();

        setExerciseDetail(exerciseDetailData);

        const exerciseVideosResponse=await fetch(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
        const exerciseVideosData=await exerciseVideosResponse.json();

        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExerciseResponse=await fetch(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, options);
        const targetMuscleExerciseData=await targetMuscleExerciseResponse.json();

        setTargetMuscleExercises(targetMuscleExerciseData);

        const equipmentExerciseResponse=await fetch(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, options);
        const equipmentExerciseData=await equipmentExerciseResponse.json();

        setEquipmentExercises(equipmentExerciseData);
    }

    fetchExercisesData();
  }, [id])
  return (
    <div className='exerciseDetails'>
      <Details  exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </div>
  )
}

export default ExerciseDetails
