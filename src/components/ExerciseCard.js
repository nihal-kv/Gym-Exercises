import { Link } from 'react-router-dom';
import './ExerciseCard.css';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import React from 'react'

const ExerciseCard = ({exercise}) => {
  return (
    <div className='exerciseCard'>
      <Link to={`/exercise/${exercise.id}`} className='exerciseCard__link'>

        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='exerciseCard__gif'/>
        <div className='exerciseCard__details'>
            <p className='exerciseCard__details1'>{exercise.bodyPart}</p>
            <p className='exerciseCard__details2'>{exercise.target}</p>
            {/* <ArrowRightAltIcon/> */}
        </div>
        <h3 className='exerciseCard__name'>{exercise.name}</h3>
      </Link>
    </div>
  )
}

export default ExerciseCard
