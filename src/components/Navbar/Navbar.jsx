import React from 'react'
import './Navbar.scss'
import  { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
//import {useState} from 'react'

const Navbar = () => {
//    let {isScrolled, setIsScrolled} = useState(false);

//    window.onscroll = () => {
//     setIsScrolled(window.scrollY === 0? false: true);
//        return () => (window.onscroll = null);
//    }
//    console.log(isScrolled);

  return (
    <div className='navbar'>
      <div className='container'>
      <div className='left'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
          alt='' />' 
      
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
      </div>
      <div className='right'>
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon'/>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
          alt=''/>

          <div className='profile'>
          <ArrowDropDown className='icon'/>
          <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
            </div>

          </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
