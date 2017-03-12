import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
const API_KEY = "AIzaSyCRRuukVmctcLWxUvy6vpNy3x5d6M7YZXs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("gulpjs");
  } //Constructor

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

    render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}  videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById("container"));
