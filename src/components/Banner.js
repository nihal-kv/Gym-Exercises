
import './Banner.css';
import bannerImage from '../assets/images/banner2.jpg';

import React from 'react'

const Banner = () => {

  const clickHandler=()=>{
    window.scrollTo({top: 1800, left: 100, behavior: "smooth"})
  }
  return (
    <div className='banner'>
        <div className='banner__left'>
            <h2 className='banner__mainHeading'>Fitness Hub</h2>
            <h3 className='banner__subHeading'>Sweat, Smile  And Repeat</h3>
            <p className='banner__para'>Check out the most effective execises.</p>
            <button className='banner__button' href='#exercises' onClick={clickHandler}>Explore Exercises</button>
            
        </div>
        <div className='banner__right'>
            <img src={bannerImage} alt='banner-pic' className='banner__rightImage'/>
        </div>     
    </div>
  )
}

export default Banner
