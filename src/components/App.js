import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//  Step 1: build the search bar component
//    - Control user input
//    - Pass search query to App.js
//  Step 2: request data from youtube api
//    - Factor out the api information to a secondary js file
//    - Store the api response in state
//  Step 3: build the Video List and Video Item components
//    - Pass api response down to VideoList
//    - Map through it and pass that down to VideoItem
//  Step 4: create a selectedVideo property on state
//    - Pass a callback through the selectedVideo prop down to VL and VI
//    - make sure we pass the video item back to the callback

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('daily funny videos');
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: '1rem' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//  Child to parent:
//    Pass a callback to the child and invoke it in the child
//    Pass information from the child to the parent as an argument for the callback
