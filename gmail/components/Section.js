import React from 'react'

const section = () => {
  return (
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a className="nav-link active hover3" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Birincil</a>
          <a className="nav-link hover3" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Sosyal</a>
          <a className="nav-link hover3" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Tanıtımlar</a>
        </div>
  )
}

export default section