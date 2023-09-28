import './BodyPart.css';

import React from 'react'
import icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {

    const clickHandler=()=>{
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: "smooth"})
    }
  return (
    <div className='bodyPart' onClick={clickHandler}>
      <img src={icon} alt='gym-icon' className='bodyPart__image' />
      <p>{item}</p>
    </div>
  )
}

export default BodyPart
