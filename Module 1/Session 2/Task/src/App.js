import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState} from "react";
function App() {
  const  [playlist,setPlaylist] = useState([]);

  axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json').then((response)=>{
    try {
      console.log(response.data.album)
    setPlaylist(response.data.album)
      console.log(playlist);
    } catch (error) {
      alert(error.message);
    }
  })
  return (
    <div>
        <h1>
            Playlist
        </h1>
        <table border='1'>
            <tr>
                <td>Album</td>
                <td>Nama Artis</td>
                <td>url</td>
                <td>Image</td>
            </tr>
            <tr>
                <td>{playlist['album_type']}</td>
                <td>{playlist['name']}</td>
                <td>{playlist['uri']}</td>
                {/*<td>{playlist['images']['url']}</td>*/}
            </tr>
        </table>
    </div>
  );
}

export default App;
