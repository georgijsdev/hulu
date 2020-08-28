import React, { useState } from 'react';
import './Results.css';

import VideoCard from './VideoCard';

const Results = () => {
  const [movies, setMovies] = useState([]);
  return (
    <div className="results">
      {movies.map(movie => (
        <VideoCard />
      ))}
      
    </div>
  );
}

export default Results; 
// 1:40 min