import React from 'react';
import './VideoCard.css';


const VideoCard = () => {
  return (
    <div className="videoCard">
      <img src="https://see.news/wp-content/uploads/2020/01/960x0.jpg" alt=""/>
      <p>This is a movie</p>
      <h2>Movie Title</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;