
// import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import instance from './axios';
import Video from './components/Video';

function App() {

  const [reels, setReels] = useState([]);

  useEffect(() =>{
    const fetchReels = async () =>{
      const res = await instance.get('/reels/data')
      setReels(res.data)
    }

    fetchReels()
    
  }, [])

  console.log(reels);

  return (
    <div className="app">
      <div className="app-videos">
        {reels.map(({_id, url, likes, shares, messages, channel, description, song }) =>(
          <Video key={_id}
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares = {shares}
         />
        ))}
      
      </div>

    </div>
  );
}

export default App;
