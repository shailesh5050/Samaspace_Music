import Library from "../Components/Library"
import Player from "../Components/Player"
import Header from "../Components/Header"
const Home = () => {
  return (
    <div className="home-screen">
        <Header />
        <Library />
        <Player />
    </div>
  )
}

export default Home