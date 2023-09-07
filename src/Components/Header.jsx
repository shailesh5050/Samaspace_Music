import spotify from '../assets/spotify.png'
import { useDispatch} from "react-redux";
import { setLibaryStatus } from '../Slices/musicSlice';
const Header = () => {
  const dispatch = useDispatch();
  
  return (
    <div className='header'>
        <img style={{width:'110px'}} src={spotify} alt=""  />
       <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
       {/* Library Btn */}
        <button className='lib-btn' onClick={()=>{dispatch(setLibaryStatus(true))}} >Library</button>
       <img className='header-profile' src="https://freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png" alt="" />
       </div>
    </div>
  )
}

export default Header