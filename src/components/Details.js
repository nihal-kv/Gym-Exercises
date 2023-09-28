import './Details.css';

import React from 'react'
import bodyPartImage from '../assets/icons/body-part.png'
import targetImage from '../assets/icons/target.png'
import equipmentImage from '../assets/icons/equipment.png'

const Details = ({exerciseDetail}) => {

    let {bodyPart, gifUrl, target, name, equipment}= exerciseDetail;

    const extraDetails=[
        {
            icon: bodyPartImage,
            name: bodyPart
        },
        {
            icon: targetImage,
            name: target
        },
        {
            icon: equipmentImage,
            name: equipment
        }
    ]
    
  return (
    <div className='details'>
      <img src={gifUrl} alt={name} loading='lazy' className='details__image' />
      <div className='details__info'>
        <h2 className='details__infoHeading'>{name}</h2>
        <p>Exercises keep you strong. {name} is one of the best exercises to target your {target}.
         It will help you to improve your mood and gain energy.</p>
        {extraDetails.map((item)=>(
            <div key={item.name} className='details__infoCard'>
                <img src={item.icon} alt={item.name}  className='details__infoCardImg'/>
                <p className='details__infoCardPara'>{item.name}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Details
