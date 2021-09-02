import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
// import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

//  Custom Hooks *******************************************************
//  Best way to create reusable code
//  Created by extracting hook-related code out of a func comp
//  Custom hooks always make use of at least one primitive hook
//  Each custom hook shold have one purpose
//  data-fetching is a great thing to try to make reusable

//  How to create Custom hooks
//  1.  Identify each line of code related to some single purpose
//        ie. code for the video list and code for the selection
//  2.  Identify the inputs to that code
//        ie. the default search term 'daily funny videos'
//  3.  Identify the outputs to that code
//        ie. videos array and onTermSubmit function
//  4.  Extract all the code into a separate function, receiving the inputs as arguments, and returning the output

//  "If you give me (inputs), I will give you (outputs)"
//  "If you give me (default search term), I will give you (a way to search for videos [onTermSubmit], and a list of videos [videos array])"
//  The goal is to extract all the videos code into a reusable hook-looking function
//  Always put them in a separate folder

const App = () => {
  // const [videos, setVideos] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('funny videos');

  useEffect(() => {
    setSelectedVideo(videos[0]);
    //  anytime we get a new list of videos, we are going to select the first item from the list
  }, [videos]);

  // useEffect(() => {
  //   onTermSubmit('daily funny videos');
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term,
  //     },
  //   });
  //   setVideos(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  // };

  //  Removed and put inline in the VideoList comp
  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container" style={{ margin: '1rem' }}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {/* *** REFACTORING FUNCTIONS *** */}
            {/* <VideoList onVideoSelect={onVideoSelect} videos={videos} /> */}
            {/* <VideoList
              onVideoSelect={(video) => setSelectedVideo(video)}
              videos={videos}
            /> */}
            {/* The below callback does the same as the above */}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// class App extends React.Component {
// state = { videos: [], selectedVideo: null };

// componentDidMount() {
//   this.onTermSubmit('daily funny videos');
// }
// onTermSubmit = async (term) => {
//   const response = await youtube.get('/search', {
//     params: {
//       q: term,
//     },
//   });
//   this.setState({
//     videos: response.data.items,
//     selectedVideo: response.data.items[0],
//   });
// };

// onVideoSelect = (video) => {
//   this.setState({ selectedVideo: video });
// };

//   render() {
//     return (
//       <div className="ui container" style={{ margin: '1rem' }}>
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
