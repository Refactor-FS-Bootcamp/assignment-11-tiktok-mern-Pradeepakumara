import { MusicNote } from '@material-ui/icons'
import React from 'react'
import Ticker from 'react-ticker'

const VideoFooter = ({channel, description, song}) => {
  return (
    <div className='video-footer'>
        <div className="video-footer-text">
            <h3>{channel}</h3>
            <p>{description}</p>
            <div className="video-footer-ticker">
                <MusicNote className='video-footer-icon' />
                <Ticker mode='smooth'>
                    {({ index }) => (
                        <>
                            <p>{song}</p>
                        </>
                    )}
                </Ticker>
            </div>
            <img src="https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?auto=compress&cs=tinysrgb&w=400" alt="record"  className='video-footer-record' />
        </div>
    </div>
  )
}

export default VideoFooter