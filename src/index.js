import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Videolist from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyD_UZQQV-OcpZyjL0ppWCLBGyFgqNpiytg";
import VideoDetail from './components/videodetail';
import _ from 'lodash';
class App extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        };


    }
    VideoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos)=>{
            console.log(videos);
            this.setState({videos:videos,selectedVideo:videos[0]});
        });

}
    render(){
        const VideoSearch=_.debounce((term)=>{this.VideoSearch(term)},500);
        return(
            <div style={{backgroundImage:'url("")',backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <SearchBar onChangeSearchTerm={VideoSearch}/></div></div>
                <div className={"row"}>
                <div className={"col-sm -12 col-md-12 col-lg-8"}><VideoDetail video={this.state.selectedVideo}/></div>
           <div className={" col-sm-12 col-md-12 col-lg-4"}><Videolist videos={this.state.videos}
            onVideoSelect={(video)=>{
                this.setState({selectedVideo:video})

            }}/>
            </div>
            </div>
            </div>

        );
    }

}
ReactDOM.render(<App/>,document.querySelector('.container-fluid'));