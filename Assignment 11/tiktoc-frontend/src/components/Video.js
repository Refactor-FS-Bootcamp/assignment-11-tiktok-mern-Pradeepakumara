import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({ url, likes, shares, messages, channel, description, song }) => {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    
    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

  return (
    <div className='video'>
        <video 
        className='video-player' 
        loop
        ref={videoRef}
        onClick={handleVideoPress}
        // onMouse={handleVideoPress}
         src={url}/>
         
         <VideoFooter 
         channel={channel}
         description={description}
          song={song}
         />
         <VideoSidebar 
         likes={likes}
         messages={messages}
         shares = {shares}
          />
    </div>
    
  )
}

export default Video