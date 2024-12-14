import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
     <div>

      <footer className='services'>
      <div>
          <h1><a href="">Services</a></h1>
          <ul>
                <li><a href="">Repairing of laptops</a></li>
                <li><a href="">Repairing of phones</a></li>
                <li><a href="">laptops batteries</a></li>
                <li><a href="">phone batteries</a></li>
                <li><a href="">Unlocking of phones/laptops etc</a></li>
            </ul>
        </div> 
      </footer>


      <div className="nav">
        <h1><a href="">WOF<span>-ICT</span></a></h1>
        <div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Services</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
