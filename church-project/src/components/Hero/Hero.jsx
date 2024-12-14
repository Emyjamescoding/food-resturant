import React from 'react'
import "./Hero.css"
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className='body'>
        <main>
          <marquee behavior="" direction="">We are big family</marquee>
          <div className='but'>
            <Link to="/post">
            <button>Post</button>
            </Link>
            <button><a href="">Read More</a></button>
            <button><a href="">Lets Start</a></button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Hero
