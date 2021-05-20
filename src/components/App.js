import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('national parks');
  
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  

    const onVideoSelect = (video) => {
      setSelectedVideo(video);
    };

  return (
    <div className="ui conteiner app-conteiner">
      <SearchBar onFormSubmit={search}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
            </div>
        </div>
      </div>
    </div>
  );    
};

export default App;