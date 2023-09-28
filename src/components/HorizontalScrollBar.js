import React from 'react'
import './HorizontalScrollBar.css';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard'

const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <div className='scrollBar'>
      {data.map((item)=>(
        <div key={item.id || item} title={item.id || item}>
           { isBodyParts ?
            <BodyPart item={item}  bodyPart={bodyPart} setBodyPart={setBodyPart} />
            : <ExerciseCard exercise={item}/>
           }
        </div>
      ))}
    </div>
  )
}

export default HorizontalScrollBar
