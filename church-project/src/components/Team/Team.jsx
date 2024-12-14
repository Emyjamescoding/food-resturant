import React from 'react'
import "./Team.css"

const Team = () => {
  return (
    <div className='center'>
      <h1>ABOUT US</h1>
      <div>
        {/* <img src="/image/us.jpg" alt="" /> */}
      </div>
      <p className='paragraph'><b><span>WOF-ICT²</span></b> Digital Skills is a registered ICT centre where a novice is trained into an expert with affordable skills.</p>
      <h3>OUR TEAM</h3>


      <div className='offer'>
      <div className='shadow'>
        <img src="/image/emeka.jpg" alt="" /><br />
        <b>ENGR. <br /> UKAIGWE EMEKA JAMES</b><br />

        <b><span>CEO</span></b>
      </div>

      <div className='shadow'>
        <img src="/image/emy.jpg" alt="" />
        <b>VICTORIA
        CHINECHEREM</b><br />

        <b> <span>DIGITAL COMPANY MANAGER</span></b>
      </div>

      <div className='shadow'>
        <img src="/image/roseline.jpg" alt="" />
        <b>ROSELINDA NGOZI</b><br />

        <b><span>SOCIAL MEDIA MANAGER</span></b>
      </div>
      </div><br />




      <div className='offer' style={{ marginTop:'20px'}}>
      <div className='shadow'>
        <img style={{ marginTop:'20px'}} src="/image/ceos.jpg" alt="" />
        <b>BENEDICTA CHINENYE
        NWOKEDI</b><br />

        <b><span>ACCOUNTANT</span></b>
      </div>

      <div className='shadow'>
        <img src="/image/em.jpg" alt="" />
        <b>VICTORIA
        CHINECHEREM</b><br />

        <b><span>DIGITAL COMPANY MANAGER</span></b>
      </div>

      <div className='shadow'>
        <img src="/image/My Love..jpg" alt="" />
        <b>MMADU ORJI AMARACHI</b><br />

        <b><span>SOCIAL MEDIA MANAGER</span></b>
      </div>
      </div>


      <div className='offer'>
        <div className='shadow'>
          <img src="/image/dr.jpg" alt="" />
          <b>DOCTOR CHIAMAKA</b><br />

          <b><span>HEALTH MANAGER</span></b>
        </div>

        <div className='shadow'>
          <img src="/image/amy.jpg" alt="" />
          <b>SOMTOCHUKWU</b><br />

          <b><span>BANK MANAGER</span></b>
        </div>

        <div className='shadow'>
          <img src="/image/wify.jpg" alt="" />
          <b>CHIAMAKA DURU</b><br />

          <b><span>LAB SCIENTIST</span></b>
        </div>
      </div>
    </div>
  );
}

export default Team
