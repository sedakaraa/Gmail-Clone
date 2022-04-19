import React from 'react'

const PopUp = (props) => {
    let {setYeniMail} =props
  return (
    <div id="yeni-mail-pop-up">
          <div className="yeni1 d-flex justify-content-between p-3 pop-up">
            <p className="pop-up">Yeni İleti</p>
            <div className="son-ikonlar">
              <i className="seda2 ml-3 pop-up">_</i>
              <i className="fas fa-compress-alt ml-1 pop-up"></i>
              <i
                onClick={() => {
                  setYeniMail(false);
                }}
                className="fas fa-times ml-1 pop-up cursor-pointer"
              ></i>
            </div>
          </div>
          <form className="box-1 p-3">
            <div className="d-flex box-3">
              Kime:
              <input className="kutu" />
            </div>

            <div className="d-flex box-3">
              Konu:
              <input className="kutu" />
            </div>

            <textarea
              className="kutu "
              name="kutu"
              rows="14"
              cols="72"
            ></textarea>
          </form>

          <div className="box-2 d-flex justify-content-between p-3">
            <div className="d-flex align-items-center pop-up-2">
              <button type="button" className="btn btn-primary">
                Gönder
              </button>

              <i className="fas fa-underline pop-up-1"></i>
              <i className="fas fa-paperclip pop-up-1"></i>
              <i className="fas fa-link pop-up-1"></i>
              <i className="far fa-smile pop-up-1"></i>
              <i className="fab fa-google-drive pop-up-1"></i>
              <i className="fas fa-image pop-up-1"></i>
              <i className="fas fa-lock pop-up-1"></i>
              <i className="fas fa-pen pop-up-1"></i>
            </div>
            <div className="box-3">
              <img src="./icon/icon0.png" className="pop-up-1" />
              <i className="fas fa-trash pop-up-1"></i>
            </div>
          </div>
        </div>
  )
}

export default PopUp