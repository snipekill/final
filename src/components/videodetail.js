import React from 'react';

const VideoDetail = (props) => {
    if (!props.video) {
        return (
            <p>loading....</p>
        );
    }
    const url = 'https://www.youtube.com/embed/' + props.video.id.videoId;
    return (
        <div>
            <div>
                <iframe className={"Style1"} allowFullScreen={"allowFullScreen"} src={url}/>
            </div>
            <div className={"Style"}>
                <h2>{props.video.snippet.title}</h2>

            </div>

        </div>
    );
};
export default VideoDetail;