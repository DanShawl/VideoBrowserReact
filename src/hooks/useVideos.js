import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;

//  Creating a custom hook
//    1.  import necessary primitive hooks
//    2.  create a function
//    3.  cut and paste all code related to the videos
//    4.  return the exports (in this case a list of videos and a function)
//        a.  can be done with useState convention, using an array
//            return [videos, onTermSubmit];
//        b.  return an object
//            return {videos, onTermSubmit}

//    5.  use the useState syntax in the App.js file
//          const [videos, search] = useVideos('funny videos')
//          we are getting our exports and putting in our import
//    6.  Use useEffect to automatically setSelected videos to the first item of the videos list
//

//    react wants us to fill the missing dependency for useeffect with search and defaultSearchTerm
