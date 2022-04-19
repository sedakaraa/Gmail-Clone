import React,{useRef} from 'react'


const OkunmamisMail = () => {
     
    let kalinMesaj=useRef(null)


    function boldMessage1Passive() {
        kalinMesaj.current.style.fontWeight = "normal";
      }
  return (

    <div
                className="d-flex align-items-center para java1 bold-message1"
                ref={kalinMesaj}
                onClick={boldMessage1Passive}
              >
                <input type="checkbox" className="ikon0 para" />
                <i className="far fa-star para yildiz"></i>
                <span className="atlas font-light cursor-pointer">
                  Konuşarak Öğren
                </span>
                <p className="lorem0 paragraf-1 font-light cursor-pointer">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Error veritatis soluta repudiandae iusto adipisci quod
                  reprehenderit temporibus aspernatur voluptate. Suscipit?
                </p>
              </div>
  )
}

export default OkunmamisMail