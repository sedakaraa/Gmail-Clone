import React, {useState} from 'react'

import Searchsubmenu from './Searchsubmenu';

const Header = () => {

  let[navbar, setNavCount]= useState(false) 
  

  return (
    <nav className="navbar navbar baslik-1" >
    <div className="d-flex align-items-center">
      <div className="navbarin-ikonlari">
        <i className="fas fa-bars navbar-ikon hover1" ></i>
        <img src="./icon/icon1.png"  className="img-ikon"/>
      </div>
      <div className="navbar-input">
        <div className="input-icons">
          
          <i className="fas fa-search klas hover1" ></i>
          <span onClick={() => setNavCount(!navbar)}>
          <i className="fas fa-sliders-h klas1 hover1"></i>
          </span>
          <input type="text" className="input-type" aria-label="Postalarda Arayın"
            placeholder="Postalarda arayın" />
         

    {
      navbar &&  <Searchsubmenu />

    }
           
        </div>
      </div>
    </div>
    <div className="navbar-input-1 d-flex justify-content-end">
      <i className="far fa-question-circle ml-3 hover2"></i>
      <i className="fas fa-cog ml-3 hover2"></i>
      <i className="fas fa-th ml-3 hover2"></i>
      <i className="far fa-user-circle ml-3 hover2 ikon3"></i>
    </div>
  </nav>
  )
}
export default Header