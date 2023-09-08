import { useState, useEffect, useRef } from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useGetSongsQuery } from '../Slices/songsApiSlice'
import { setCurrentSongData } from '../Slices/musicSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setLibaryStatus } from '../Slices/musicSlice'
const Library = () => {
  const { data: songs, error, isLoading } = useGetSongsQuery()
  const [songList, setSongList] = useState([])
  const [topTracks, setTopTracks] = useState([])
  const [forUtracks, setForUtracks] = useState([])
  const [isTopTrack, setIsTopTrack] = useState(false)
  const [searchKey, setSearchKey] = useState('')
  const dispatch = useDispatch()
  const audioRef = useRef(null)
  const selectedSong = useSelector(state => state.music.currentSong)
  const openLibrary = useSelector(state => state.music.openLibrary)
  useEffect(() => {
    songs && setSongsToList()
  }, [isTopTrack, isLoading, openLibrary])
  function tabChange (tabName) {
    tabName === 'foryou' ? setIsTopTrack(false) : setIsTopTrack(true)
    setSearchKey('')
  }
  function setSongsToList () {
    let forYouSongs = songs.data.filter(song => song.top_track === false)
    setForUtracks(forYouSongs)
    let topSongs = songs.data.filter(song => song.top_track === true)
    setTopTracks(topSongs)
    if (isTopTrack) {
      setSongList(topSongs)
    } else {
      setSongList(forYouSongs)
    }
    let songArray = []
    if (isTopTrack) {
      songArray = topSongs
    } else {
      songArray = forYouSongs
    }
    getDuration (songArray)
   
  }

  async function getDuration(songArray) {
    const audioContext = new AudioContext();
    const fetchSongDuration = async (song) => {
      try {
        const response = await fetch(song.url.replace(/\s+/g, ''));
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        let durationInSeconds = audioBuffer.duration;
        //change it to time formate 00:00
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = Math.floor(durationInSeconds % 60);
        durationInSeconds = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        return Object.assign({}, song, { duration: durationInSeconds });
      } catch (error) {
        console.error(`Error fetching duration for song with ID ${song.id}: ${error.message}`);
        return song; // return the original song object without duration property
      }
    };
  
    const songObjects = await Promise.all(songArray.map(fetchSongDuration));
    setSongList(songObjects);
  }

    
  
  function searchSongByNameandArtist (e) {
    setSearchKey(e.target.value)
    let filteredSongs = []
    if (isTopTrack) {
      filteredSongs = topTracks.filter(
        song =>
          song.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          song.artist.toLowerCase().includes(e.target.value.toLowerCase())
      )
    } else {
      filteredSongs = forUtracks.filter(
        song =>
          song.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          song.artist.toLowerCase().includes(e.target.value.toLowerCase())
      )
    }
    setSongList(filteredSongs)
  }
  function selectSong (song) {
    dispatch(setCurrentSongData(song))
  }

  return (
    <div className={`library-wrapper ${openLibrary ? 'open-library' : ''}`}>
      {/* <audio ref={audioRef} /> */}
      <span
        className='lib-close-btn'
        onClick={() => {
          dispatch(setLibaryStatus(true))
        }}
      >
        <AiFillCloseCircle />
      </span>
      <div className='library-container'>
        <div className='tabs'>
          <h3
            className={!isTopTrack ? 'active' : 'inActive'}
            onClick={() => {
              tabChange('foryou')
            }}
          >
            For You{' '}
          </h3>
          <h3
            className={!isTopTrack ? 'inActive' : 'active'}
            onClick={() => {
              tabChange('toptracks')
            }}
          >
            Top Tracks
          </h3>
        </div>
        <div className='search-box'>
          <input
            value={searchKey}
            onChange={searchSongByNameandArtist}
            type='text'
            placeholder='Search Song, Artist'
          />
          <BiSearch className='search-icon' />
        </div>
        {!isTopTrack ? (
          <div className='library-songs '>
            {songList.map(song => {
              return (
                <div
                  key={song.id}
                  className={`lib-song ${
                    isLoading ? 'animated-background' : ''
                  } ${song.id == selectedSong?.id ? 'lib-song-active' : ''}`}
                  onClick={() => {
                    selectSong(song)
                  }}
                >
                  <div className='lib-img-title'>
                    <img
                      src={`https://cms.samespace.com/assets/${song.cover}`}
                      alt={song.name}
                    />
                    <div className='lib-song-info'>
                      <h4>{song.name}</h4>
                      <p>{song.artist}</p>
                    </div>
                  </div>

                  <div className='lib-song-time'>
                  <p>{song.duration ? song.duration :'0:00'}</p>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className='library-songs'>
            {songList.map(song => {
              return (
                <div
                  key={song.id}
                  className={`lib-song ${
                    song.id == selectedSong?.id ? 'lib-song-active' : ''
                  }`}
                  onClick={() => {
                    selectSong(song)
                  }}
                >
                  <div className='lib-img-title'>
                    <img
                      src={`https://cms.samespace.com/assets/${song.cover}`}
                      alt={song.name}
                    />
                    <div className='lib-song-info'>
                      <h4>{song.name}</h4>
                      <p>{song.artist}</p>
                    </div>
                  </div>

                  <div className='lib-song-time'>
                    <p>{song.duration ? song.duration :'0:00'}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Library
