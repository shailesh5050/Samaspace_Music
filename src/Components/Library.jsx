import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
const Library = () => {
  const [songs, setSongs] = useState({
    data: [
      {
        id: 1,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:10:57.746Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:19:48.547Z",
        name: "Colors",
        artist: "William King",
        accent: "#331E00",
        cover: "4f718272-6b0e-42ee-92d0-805b783cb471",
        top_track: true,
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/august-145937.mp3",
      },
      {
        id: 2,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:11:31.021Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:23:07.983Z",
        name: "August",
        artist: "Markotopa",
        accent: "#0A092F",
        cover: "e714a3b8-9ae0-4417-a2d1-6ece39ad5776",
        top_track: false,
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/phoenix-97462.mp3",
      },
      {
        id: 3,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:12:09.978Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:20:42.673Z",
        name: "Fallen Leaves",
        artist: "Matt Dawson",
        accent: "#59123F",
        cover: "c296c57b-1a5a-45a7-80a7-3f60f990ed62",
        top_track: false,
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/french-song-about-brittany-136020.mp3",
      },
      {
        id: 4,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:12:51.670Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:21:12.661Z",
        name: "November",
        artist: "Adam Smith",
        accent: "#0B565B",
        cover: "9fffafe9-9013-4846-8b5c-2b5dcbcd4b62",
        top_track: false,
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/perfect-timing-by-saavane-sweet-funky-song-155314.mp3",
      },
      {
        id: 5,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:14:04.585Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:21:33.125Z",
        name: "The French",
        artist: "Saavane",
        accent: "#001D61",
        cover: "62e1d9b2-593b-4cf0-938d-79e660d7ac25",
        top_track: false,
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/uplifting-corporate-pop-rock-it-is-time-113871.mp3",
      },
     
      {
        id: 7,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:15:14.439Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:22:26.020Z",
        name: "Uplift",
        artist: "Tom Keen",
        accent: "#331A05",
        cover: "0083048f-5fd8-47fd-9013-6d340151b345",
        top_track: true,
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/sunflowers-spring-and-summer-piano-music-14010.mp3",
      },
      {
        id: 8,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:15:44.766Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:22:48.401Z",
        name: "First Touch",
        artist: "William King",
        accent: "#332B05",
        cover: "bb7c91a1-a2cb-42ae-b9a9-dee679c8726e",
        top_track: true,
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/illusion-feel-ambient-guitar-146100.mp3",
      },
      {
        id: 9,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:16:14.372Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:17:05.921Z",
        name: "Sunflowers",
        artist: "Sarah Taylor",
        accent: "#57001A",
        cover: "2d8f1cca-0e1b-416b-87ce-50ff50cdac4f",
        top_track: true,
        url: "https-pub-172b4845a7e24a16956308706aaf24c2-r2-dev-phoenix-97462-mp3",
      },
      {
        id: 10,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:16:38.957Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:23:26.359Z",
        name: "Illusion Feel",
        artist: "William King",
        accent: "#160D5E",
        cover: "c26001ae-c51a-43ba-b309-f1fae226ef40",
        top_track: true,
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/great-is-thy-faithfulness-9449.mp3",
      },
    ],
  });
  const [songList, setSongList] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [forUtracks, setForUtracks] = useState([]);
  const [isTopTrack, setIsTopTrack] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  useEffect(() => {
    setSongsToList();
  }, [isTopTrack]);
  function tabChange(tabName) {
    tabName === "foryou" ? setIsTopTrack(false) : setIsTopTrack(true);
    setSearchKey('')
  }
  function setSongsToList(){
    let forYouSongs = songs.data.filter((song) => song.top_track === false);
    setForUtracks(forYouSongs);
    let topSongs = songs.data.filter((song) => song.top_track === true);
    setTopTracks(topSongs);
    if(isTopTrack){
      setSongList(topSongs);
    }else{
      setSongList(forYouSongs);
    }
  }
   function getDurationByAudioUrl(url){
    return new Promise((resolve, reject) => {
      const audio = new Audio(url);
      audio.addEventListener('canplaythrough', () => {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        resolve(time);
      });
     
    });
  }
  async function getTime(url) {
    try {
      const duration = await getDurationByAudioUrl(url);
      console.log(`Duration: ${duration}`);
      return duration;
    } catch (error) {
      console.error(error);
    }
  }
  
  function searchSongByNameandArtist(e){
    setSearchKey(e.target.value);
    let filteredSongs = [];
    if(isTopTrack){
      filteredSongs = topTracks.filter((song) => song.name.toLowerCase().includes(e.target.value.toLowerCase()) || song.artist.toLowerCase().includes(e.target.value.toLowerCase()));
    }else{
      filteredSongs = forUtracks.filter((song) => song.name.toLowerCase().includes(e.target.value.toLowerCase()) || song.artist.toLowerCase().includes(e.target.value.toLowerCase()));
    }
    setSongList(filteredSongs);

  }
  return (
    <div className="library-wrapper">
      <div className="library-container">
        <div className="tabs">
          <h3 className={!isTopTrack?'active':'inActive'} onClick={()=>{tabChange('foryou')}}>For You </h3>
          <h3 className={!isTopTrack?'inActive':'active'} onClick={()=>{tabChange('toptracks')}}>Top Tracks</h3>
        </div>
        <div className="search-box">
          <input value={searchKey} onChange={searchSongByNameandArtist} type="text" placeholder="Search Song, Artist" />
          <BiSearch className="search-icon" />
        </div>
        {!isTopTrack ? (
          <div className="library-songs">
            {songList.map((song) => {
            return  (
                <div key={song.id} className="lib-song">
              <div className="lib-img-title">
              <img src={`https://api.slingacademy.com/public/sample-photos/${song.id}.jpeg`} alt={song.name} />
                <div className="lib-song-info">
                  <h4>{song.name}</h4>
                  <p>{song.artist}</p>
                </div>
              </div>

              <div className="lib-song-time">
                <p>0:34</p>
              </div>
            </div>
              )
            })}
          </div>
        ) : (
          <div className="library-songs">
            {songList.map((song) => {
            return  (
                <div key={song.id} className="lib-song">
              <div className="lib-img-title">
                <img src={`https://api.slingacademy.com/public/sample-photos/${song.id}.jpeg`} alt="" />
                <div className="lib-song-info">
                  <h4>{song.name}</h4>
                  <p>{song.artist}</p>
                </div>
              </div>

              <div className="lib-song-time">
                <p>3:34</p>
              </div>
            </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
