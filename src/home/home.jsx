import './home.scss'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const home = () => {
  return (
    <div className='home'>
      <Navbar/>
        <img src='https://assets.afcdn.com/story/20180108/1141060_w767h767c1cx396cy260.jpg'
            alt=''
            width='100%'
        />

    </div>
  )
}

export default home
