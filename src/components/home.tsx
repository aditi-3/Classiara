// rfce to use snippet
import '../css/home.css' 
import '../css/utilities.css' 
import Navbar from './navbar'
import logo from '../assets/images/Classiara.png'
import woman1 from '../assets/images/woman1.jpg'
import man1 from '../assets/images/man1.jpg'
import woman5 from '../assets/images/woman5.jpg'
import { IoIosArrowDown } from "react-icons/io";

function home() {
  return (
    <div>
      <div className='home-container-one'>
        <div className='home-classiara-container'>
          <img src={logo} className='classiara-title'></img>
          <div className=''>
            <Navbar />
          </div>
        </div>
        <div className='flex col'>
          <div className='flex'>
            <div className='home-text flex ai-c'>
              <div>
                <p className='discover'>Discover Classy</p>
                <p>Find your style, dress to inspire, explore new expressions.</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className='home-img flex row jc-se'>
              <div>
                <img src={man1} className='man1'></img>
              </div>
              <div className='flex col jc-se'>
                <img src={woman5} className='woman5 ai-c'></img>
                <img src={woman1} className='woman1'></img>
              </div>
            </div>
          </div>
          <div className='home-downarrow ai-c'><IoIosArrowDown /></div>
        </div>
      </div>

      <div className='home-container-two'>
      
      </div>
      <div className='home-container-three'>
      
      </div>
      <div className='home-container-four'>
      
      </div>
      <div className='home-container-five'>
      
      </div>
      <div className='home-container-six'>
      
      </div>
    </div>
  )
}

export default home
