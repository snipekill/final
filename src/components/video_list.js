import React from 'react';
import ReactDOM from 'react-dom';
import VideoList_item from './videolist_item';
const VideoList=(props)=>{
    const videoListItem=props.videos.map((video)=>{

        return(
            <VideoList_item key={video.id.videoId} video={video}
            onVideoSelect={props.onVideoSelect}/>
        )


    });
    const style1={
        align:"right"
    };

        return (
            <div style={style1}>

                    {videoListItem}

            </div>

        );

}
export default VideoList;
