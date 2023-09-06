import Library from "../Components/Library"
import Player from "../Components/Player"
import Header from "../Components/Header"
import { useEffect,useState } from "react"
import { useSelector } from "react-redux"
import getBackgroundColor from './../Utils/getBackground';
const Home = () => {
  const selectedSong = useSelector((state) => state.music.currentSong);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  useEffect(() => {
    async function fetchBackgroundColor() {
      const color = await getBackgroundColor(`https://cms.samespace.com/assets/${selectedSong.cover}`,10,10);
      setBackgroundColor(color);
    }
    selectedSong && fetchBackgroundColor();
  }, [selectedSong]);
  const gradient = `linear-gradient(to bottom, ${backgroundColor} 0%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 1) 100%)`;
  return (
    <div className="home-screen" style={{background:gradient,transition:'0.8s ease-in-out'}}>
        <Header />
        <Library />
        <Player />
    </div>
  )
}


export default Home