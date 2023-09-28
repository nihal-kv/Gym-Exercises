import './ExerciseVideos.css';

import React from 'react'

const ExerciseVideos = ({exerciseVideos, name}) => {
  console.log(name)

  return (
    <div className='exerciseVideos'>
      <h2 className='exerciseVideos__heading'>Watch <span>{name}</span> exercise videos</h2>
      <div className='exerciseVideos__div'>
        {exerciseVideos?.slice(0, 3).map((item, index)=>(
          <a 
            key={index}
            className='exerciseVideos__divAnchor'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} className='exerciseVideos__image'/>
            <h5>{item.video.title}</h5>
            <h6>{item.video.channelName}</h6>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ExerciseVideos
