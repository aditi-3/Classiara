import '../css/navbar.css' 
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

function navbar() {
  return (
    <div className='nav flex jc-se ai-c'>
      <nav className=''>
        <ul>
            <li><a href='/' className=''>New Arrivals <IoMdArrowDropdown /></a></li>
            <li><a href='/' className=''>Mens <IoMdArrowDropdown /></a></li>
            <li><a href='/' className=''>Womens <IoMdArrowDropdown /></a></li>
            <li><a href='/' className=''>Accessories <IoMdArrowDropdown /></a></li>
            <li><a href='/' className=''>Designers</a></li>
        </ul>
      </nav>
      <nav className=''>
        <ul>
            <li><a href='/' className=''>Login</a></li>
            <li><a href='/' className=''>Search <IoSearchOutline /></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar

