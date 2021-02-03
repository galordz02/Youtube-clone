import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function VideoCard( {image, title, channel, views, timestamp, channelImage} ) {
    return (
        <div className="videoCard">
            <img src={image} alt=""/>
            <div className="videoCard_info">
                <AccountCircleIcon 
                className="videoCard_avatar" 
                alt={channel} 
                src={channelImage}
                />
                <div class="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} * {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
