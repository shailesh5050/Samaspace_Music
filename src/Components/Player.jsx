import { useState, useRef,useEffect } from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { BsFillPlayFill } from "react-icons/bs";
import { FaPause } from "react-icons/fa";
import { AiFillForward, AiFillBackward } from "react-icons/ai";
const Player = () => {
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
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/ uplifting-corporate-pop-rock-it-is-time-113871.mp3",
      },
      {
        id: 6,
        status: "published",
        sort: null,
        user_created: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_created: "2023-08-10T06:14:41.564Z",
        user_updated: "2085be13-8079-40a6-8a39-c3b9180f9a0a",
        date_updated: "2023-08-10T07:21:53.614Z",
        name: "Perfect Timing",
        artist: "Saavane",
        accent: "#033435",
        cover: "38b58de6-33aa-4e9d-beb2-46d8d81b1540",
        top_track: true,
        url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/first-touch-160603.mp3",
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
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // [1
  const [progressTimer, setProgressTimer] = useState('0:00');
  const [durationTime, setDurationTime] = useState('0:00');
  const audioRef = useRef(null);
  const progressWrapperRef = useRef(null);
  const progressRef = useRef(null);
  useEffect(() => {
    audioRef.current.src = songs.data[currentSong].url;
  }, []);
  function playCurrentSong() {
    audioRef.current.src = songs.data[currentSong].url;
    audioRef.current.play();
    setIsPlaying(true);
  }
  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
    updateProgress();
  };
  const pauseAudio = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };
  const nextSong = () => {
    if (currentSong === songs.data.length - 1) {
      setCurrentSong(0);
    } else {
      setCurrentSong(currentSong + 1);
    }
    playCurrentSong()
  };
  const prevSong = () => {
    if (currentSong === 0) {
      setCurrentSong(songs.data.length - 1);
    } else {
      setCurrentSong(currentSong - 1);
    }
    playCurrentSong()
  };
  const updateProgress = () => {
    const progress = progressRef.current
    const audio = audioRef.current;
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60)<10?`0${Math.floor(audio.currentTime % 60)}`:Math.floor(audio.currentTime % 60);
    const minutesEnd = isNaN(Math.floor(audio.duration / 60)) ? '00' : Math.floor(audio.duration / 60);
    const secondsEnd = isNaN(Math.floor(audio.duration % 60)) ? '00' : Math.floor(audio.duration % 60);
    setProgressTimer(`${minutes}:${seconds}`)
    setDurationTime(`${minutesEnd}:${secondsEnd}`)
    if (audio.ended) {
      nextSong();
    }
  };
  const setProgress = (e) => {
    const progressWrapper = progressWrapperRef.current;
    const width = progressWrapper.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (clickX / width) * duration;
  }

  return (
    <div className="player-container">
      <h2 className="white">{songs.data[currentSong].name}</h2>
      <p className="white">{songs.data[currentSong].artist}</p>
      <img src="https://a10.gaanacdn.com/gn_img/albums/4Z9bqo3yQn/9bqZ41LXKy/size_l.jpg" alt="Viva La Vida" />
      <div className="player-controls">
        <div className="progress-bar">
          <audio onTimeUpdate={updateProgress} ref={audioRef}></audio>
          <div className="start white">{progressTimer}</div>
          <div className="proress-wrapper" ref={progressWrapperRef} onClick={setProgress}>
            <div className="progress" ref={progressRef}></div>
          </div>
          <div className="end white">{durationTime}</div>
        </div>
        <div className="all-controls">
          <div className="option">
            <BiDotsHorizontal />
          </div>
          <div className="buttons">
            <button onClick={prevSong}>
              <AiFillBackward  />
            </button>
            {isPlaying?(<button className="playBtn" onClick={pauseAudio}>
              <FaPause />
            </button>):(<button className="playBtn" onClick={playAudio}>
              <BsFillPlayFill  />
            </button>)}
            
            
            <button>
              <AiFillForward onClick={nextSong} />
            </button>
          </div>
          <div className="sound">
            {isMuted?(<HiSpeakerXMark />):(<HiSpeakerWave />)}
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
