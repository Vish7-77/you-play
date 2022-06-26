import axios from 'axios';
const KEY='AIzaSyCH6UsoaH60Rj7kA7TtImFkp3mxQJu5gUw'
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
      part:'snippet',
      maxResults:25,
      key:KEY
    }
})