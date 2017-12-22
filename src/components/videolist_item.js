import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const VideoList_item=(props)=>{
const video=props.video;
const style={
  height:"100px",
    width:"150px",
    borderRadius: "5%",
    marginBottom:"20px",
    marginRight:"-20px",
    paddingRight:"-20px"

};
    const style1={
        color:"blue",
        textShadow:"0.5px 0px #3F5050",
        marginLeft:"-100px"

    };
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div  className={"col-6"} style={style1} onClick={()=>{props.onVideoSelect(video)}}>
                        <img style={style} src={video.snippet.thumbnails.default.url}/></div>

                        <div className={"col-6"}><strong> {video.snippet.title}</strong>
            </div>
            </div>
</div>
        );

}
export default VideoList_item;