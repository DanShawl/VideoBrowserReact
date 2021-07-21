import axios from 'axios';

const KEY = 'AIzaSyDGq93b4XYrWCw7R-zQqGMGPx-dpROpeNY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
