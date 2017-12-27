import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import {API_KEY} from "./constants";
import API from "./constants";

import VideoDetail from './components/videodetail';
import _ from 'lodash';
API;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };


    }

    VideoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({videos: videos, selectedVideo: videos[0]});
        });

    }

    render() {
        const VideoSearch = _.debounce((term) => {
            this.VideoSearch(term)
        }, 500);
        return (
            <div>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <SearchBar onSearchTermChange={VideoSearch}/></div>
                </div>
                <div className={"row"}>
                    <div className={"col-sm -12 col-md-12 col-lg-8"}>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className={" col-sm-12 col-md-12 col-lg-4"}>
                        <VideoList videos={this.state.videos}
                                   onVideoSelect={(video) => {
                                       this.setState({selectedVideo: video})

                                   }}/>
                    </div>
                </div>
            </div>

        );
    }

}

ReactDOM.render(<App/>, document.querySelector('.container-fluid'));