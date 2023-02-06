import { Favorite, FavoriteBorder, Message, Share } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react'

const VideoSidebar = ({likes, shares, messages}) => {
    const [like, setLike] = useState(false);

  return (
    <div className='video-sidebar'>
        <div className="video-sidebar-button">
            {like ? <Favorite fontSize='large' onClick={e => setLike(false)} /> : <FavoriteBorder fontSize='large' onClick={e => setLike(true)}/>}
            <p>{like ? likes+1 : likes}</p>
        </div>
        <div className="video-sidebar-button">
            <Message fontSize='large' />
            <p>{messages}</p>
        </div>
        <div className="video-sidebar-button">
            <Share fontSize='large' />
            <p>{shares}</p>
        </div>

    </div>
  )
}

export default VideoSidebar