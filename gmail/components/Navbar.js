import React from 'react'

const Navbar = (props) => {
    let {setYeniMail} =props
  return (
    <div className="navbar-ikinci-kisim ">
    <div className="ikon-2 d-flex align-items-center">
      
      <div className="resimdiv">
        
          <img onClick={()=>{setYeniMail(true)}} src="./img/resim1.png"  className="img-resim1"/>
        
        
      </div>
      
      <input type="checkbox" className="input-cekbox"/>
      <i className="fas fa-redo-alt yazi-2"></i>
      
      <img src="./img/resim2.png" className="img-resim2"/>
    </div>
    <div className="navbar-ikinci-kisim2 ">
      <button type="button" className="yazi-1">77 satırdan 1-50 arası </button>
      <i className="fas fa-angle-left ml-4 yazi-2"></i>
      <i className="fas fa-angle-right ml-4 yazi-2"></i>
      <i className="fas fa-keyboard ml-4 yazi-2"></i>
    </div>
  </div>
  )
}

export default Navbar