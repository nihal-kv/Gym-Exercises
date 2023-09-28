import './SimilarExercises.css'

import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  console.log(equipmentExercises);
  return (
    <div className='similarExercises'>
      <h3 className='similarExercises__heading'>Exercises that target the same muscle group</h3>
      <div className='similarExercises__div'>
          {targetMuscleExercises.length && <HorizontalScrollBar data={targetMuscleExercises}/>}
      </div>
      <h3 className='similarExercises__heading'>Exercises that use the same equipment</h3>
      <div className='similarExercises__div'>
          {equipmentExercises.length && <HorizontalScrollBar data={equipmentExercises}/>}
      </div>
    </div>
  )
}

export default SimilarExercises
