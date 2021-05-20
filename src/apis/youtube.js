import axios from 'axios';

const KEY = 'AIzaSyAzvFEmRYiW3XTI-4OVDwzHu7gU6pJ40Tk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})