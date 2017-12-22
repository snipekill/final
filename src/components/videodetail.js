import React from 'react';
const VideoDetail=(props)=>{
    if(!props.video){
        return(
            <p>loading....</p>
        );
    }
    const style={
        width:"700px",
        height:"100px",
        borderRadius:"3%",
        color:"black",
        padding:"2px 2px 2px 2px",
        margin:"20px 20px 20px 40px"
    };
    const style1={
        width:"700px",
        height:"350px",
        opacity:"0.9",
        padding:"2px 2px 2px 2px",
        margin:"20px 20px 20px 40px",
        borderRadius:"0px"
    };
    const url='https://www.youtube.com/embed/'+props.video.id.videoId;
    console.log("props"+props);
    return(
      <div>
          <div>
              <iframe  style={style1} allowFullScreen={"allowFullScreen"} src={url}/>
          </div>
          <div style={style}>
              <h2>{props.video.snippet.title}</h2>

          </div>

      </div>
    );
}
export  default VideoDetail;