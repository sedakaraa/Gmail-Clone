import React from "react";
import { Button } from "reactstrap";

const Searchsubmenu = () => {
  function openAlert() {
    alert("Lütfen bazı arama kriterleri girin")
  }

  return (
    <div className="subtabmenu">
      <form>
        <div className="subtabmenu-container">
          <label htmlFor="fname">Gönderen:</label>
          <input className="subtab-input" />
        </div>
        <div className="subtabmenu-container">
          <label htmlFor="fname">Alıcı:</label>
          <input className="subtab-input" />
        </div>
        <div className="subtabmenu-container">
          <label htmlFor="fname">Konu:</label>
          <input className="subtab-input" />
        </div>
        <div className="subtabmenu-container">
          <label htmlFor="fname">İçerdiği kelimeler:</label>
          <input className="subtab-input" />
        </div>
        <div className="subtabmenu-container">
          <label htmlFor="fname">Şunu içermeyen:</label>
          <input className="subtab-input" />
        </div>

        <div className="subtabmenu-container ">
          <label htmlFor="fname">Boyut:</label>
          <select className="subtab-input subtab-select">
            <option>büyüktür</option>
            <option>küçüktür</option>
          </select>
          <select className="subtab-input subtab-select">
            <option>MB</option>
            <option>KB</option>
            <option>BAYT</option>
          </select>
        </div>

        <div className="subtabmenu-container">
          <label htmlFor="fname">Tarih aralığı:</label>
          <select className="subtab-input subtab-select">
            <option>1 gün</option>
            <option>3 gün</option>
            <option>1 hafta</option>
          </select>
          <input type="date" className="subtab-input subtab-select"></input>
        </div>

        <div className="subtabmenu-container">
          <label htmlFor="fname">Ara:</label>
          <select className="subtab-input ara">
            <option>Tüm Postalar</option>
          </select>
        </div>

        <div className="d-flex">
          <div className="input-check">
            <input type="checkbox" className="check-margin"></input>
            <label htmlFor="text" className="font-subtab">
              Eki var
            </label>
          </div>

          <div className="input-check">
            <input type="checkbox" className="ml-5 check-margin"></input>
            <label htmlFor="text" className="font-subtab">
              Sohbetleri dahil etme
            </label>
          </div>
        </div>
        
        <div  className="subtab-button">
          <span  className="mr-3">
            <small onClick={openAlert} className="text-secondary cursor-pointer">
              Filtre oluştur
            </small>
          </span>

          <Button color="primary" className="pl-4 pr-4">
            Ara
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Searchsubmenu;
