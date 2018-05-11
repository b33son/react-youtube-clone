import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/search-bar";
import VideoList from "./components/video-list";
import VideoDetail from "./components/video-detail";
import { SearchResult, Grid } from "semantic-ui-react";

import { YOUTUBE_API_KEY } from "./keys/keys";
const baseYtUrl = "https://www.googleapis.com/youtube/v3/search?";

class App extends Component {
  constructor() {
    super();
    this.state = { videos: [], selectedVideo: null };
    //this.searchYouTube("quadcopter");
  }

  searchYouTube = async searchTerm => {
    const url =
      baseYtUrl +
      `key=${YOUTUBE_API_KEY}&part=snippet&order=date&maxResults=10&q=${searchTerm}`;
    const res = await fetch(url);
    const j = await res.json();
    let videos = j.items;
    this.setState({ videos, selectedVideo: videos[0] });
    console.log(videos);
  };

  selectVideo = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          onSearchTermChange={term => this.searchYouTube(term)}
          // searchResults={this.getSearchResults}
        />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid.Column>
            <Grid.Column>
              <VideoList
                videos={this.state.videos}
                selectedVideo={this.state.selectedVideo}
                onVideoSelect={this.selectVideo}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
