import { useState, useRef, useEffect } from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import { BsFillPlayFill } from 'react-icons/bs'
import { FaPause } from 'react-icons/fa'
import { AiFillForward, AiFillBackward } from 'react-icons/ai'
import { useGetSongsQuery } from '../Slices/songsApiSlice'
import { setCurrentSongData } from '../Slices/musicSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import {SequenceSpinner } from 'react-spinners-kit'
const Player = () => {
  const { data: songs, error, isLoading } = useGetSongsQuery()
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false) // [1
  const [progressTimer, setProgressTimer] = useState('0:00')
  const [durationTime, setDurationTime] = useState('0:00')
  const audioRef = useRef(null)
  const progressWrapperRef = useRef(null)
  const progressRef = useRef(null)
  const selectedSong = useSelector(state => state.music.currentSong)
  const dispatch = useDispatch()

  useEffect(() => {
    if (songs) {
      audioRef.current.src = songs.data[currentSong].url
    }
  }, [isLoading])

  useEffect(() => {
    if (selectedSong) {
      const seletedSongIndex = songs.data.findIndex(
        song => song.id === selectedSong.id
      )
      setCurrentSong(seletedSongIndex)
      dispatch(setCurrentSongData(songs.data[seletedSongIndex]))
      playCurrentSong()
    }
  }, [selectedSong, setIsPlaying, currentSong])

  function playCurrentSong () {
    audioRef.current.src = songs.data[currentSong].url.replace(/\s+/g, '')
    //Avoid the Promise Error
    setTimeout(function () {
      audioRef.current.play()
    }, 150)

    setIsPlaying(true)
  }

  function toggleMute () {
    const audio = audioRef.current
    if (audio.volume > 0) {
      audio.volume = 0
      setIsMuted(true)
    } else {
      audio.volume = 1
      setIsMuted(false)
    }
  }
  const playAudio = () => {
    audioRef.current.play()
    setIsPlaying(true)
    updateProgress()
  }
  const pauseAudio = () => {
    setIsPlaying(false)
    audioRef.current.pause()
  }
  const nextSong = () => {
    if (currentSong === songs.data.length - 1) {
      setCurrentSong(0)
    } else {
      setCurrentSong(currentSong + 1)
      dispatch(setCurrentSongData(songs.data[currentSong + 1]))
    }
    playCurrentSong()
  }
  const prevSong = () => {
    if (currentSong === 0) {
      setCurrentSong(songs.data.length - 1)
    } else {
      setCurrentSong(currentSong - 1)
      dispatch(setCurrentSongData(songs.data[currentSong - 1]))
    }
    playCurrentSong()
  }
  const updateProgress = () => {
    const progress = progressRef.current
    const audio = audioRef.current
    const progressPercent = (audio.currentTime / audio.duration) * 100
    progress.style.width = `${progressPercent}%`
    const minutes = Math.floor(audio.currentTime / 60)
    const seconds =
      Math.floor(audio.currentTime % 60) < 10
        ? `0${Math.floor(audio.currentTime % 60)}`
        : Math.floor(audio.currentTime % 60)
    const minutesEnd = isNaN(Math.floor(audio.duration / 60))
      ? '00'
      : Math.floor(audio.duration / 60)
    const secondsEnd = isNaN(Math.floor(audio.duration % 60))
      ? '00'
      : Math.floor(audio.duration % 60)
    setProgressTimer(`${minutes}:${seconds}`)
    setDurationTime(`${minutesEnd}:${secondsEnd}`)
    if (audio.ended) {
      nextSong()
    }
  }
  const setProgress = e => {
    const progressWrapper = progressWrapperRef.current
    const width = progressWrapper.clientWidth
    const clickX = e.nativeEvent.offsetX
    const duration = audioRef.current.duration
    audioRef.current.currentTime = (clickX / width) * duration
  }
  if (error) return <div>{error}</div>
  if (isLoading) return <div className='loader-overlay'><SequenceSpinner /></div>
  return (
    <div className="player-wrapper">
    <div className='player-container'>
      <h2 className='white'>{songs.data[currentSong].name}</h2>
      <p className='white'>{songs.data[currentSong].artist}</p>
      <img
        src={`https://cms.samespace.com/assets/${songs.data[currentSong].cover}`}
        alt='Viva La Vida'
      />
      <div className='player-controls'>
        <div className='progress-bar'>
          <audio  onTimeUpdate={updateProgress} ref={audioRef}></audio>
          <div className='start white'>{progressTimer}</div>
          <div
            className='proress-wrapper'
            ref={progressWrapperRef}
            onClick={setProgress}
          >
            <div className='progress' ref={progressRef}></div>
          </div>
          <div className='end white'>{durationTime}</div>
        </div>
        <div className='all-controls'>
          <div className='option'>
            <BiDotsHorizontal />
          </div>
          <div className='buttons'>
            <button onClick={prevSong}>
              <AiFillBackward />
            </button>
            {isPlaying ? (
              <button className='playBtn' onClick={pauseAudio}>
                <FaPause />
              </button>
            ) : (
              <button className='playBtn' onClick={playAudio}>
                <BsFillPlayFill />
              </button>
            )}

            <button>
              <AiFillForward onClick={nextSong} />
            </button>
          </div>
          <div onClick={toggleMute} className='sound'>
            {isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Player
