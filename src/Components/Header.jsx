import spotify from '../assets/spotify.png'
const Header = () => {
  return (
    <div className='header'>
        <img style={{width:'110px'}} src={spotify} alt=""  />
        <img className='header-profile' src="https://freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png" alt="" />
    </div>
  )
}

export default Header