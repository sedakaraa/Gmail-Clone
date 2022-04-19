import React from "react";

const DetailPage = ({ detailKey, setDetailDataKey }) => {
  console.log(detailKey);
  return (
    <div className="en-ust">
      <i
        class="fa-solid fa-backward"
        onClick={() => { 
          setDetailDataKey(null);
        }}
      ></i>

      <div className="w-100 d-flex align-items-center flex-column">
        <img
          src="https://ci5.googleusercontent.com/proxy/T_zJ7UbaC9x27OP4-ZCPfDipqYLSGum30AlaxEycVclfvxO8Cze0sZ0kCrXlx6a-MgvW2tswbIyiNVfczjDuGh9okorzC5SUJDfwkHr6-3j1KUu94HuAw5uxM_jaElQef3Sub84=s0-d-e1-ft#https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png"
          aria-hidden="true"
          className="detailPageİcon"
          alt="Google"
         
        />
        <img
          src="https://ci4.googleusercontent.com/proxy/dRSUy9k4S_QaXpPakIiB0KjIdjNXFbxrAdVxv_67C1ylhx8eREhP-FT7_y3uoIDTWxNtb99METYl6pGl42TE7mugYZCqYY3SmXZXOOvv5PM5rYKWnUbIqtJoiVyCJw1v02EW=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/sa_shield_yellow_161017_103x90@2.png"
          className="detailPage2İcon"
          
        />
      </div>
      <h2 className="header-h">{detailKey.header}</h2>

      <div className="text-md-center">
        <a className="stiller">{detailKey.secondHeader}</a>

        <p className="paragraph">
          <img
            src="https://ci6.googleusercontent.com/proxy/fa4pvAUvIE0uNmDfNh-cpw_yWst6cc1IoX2OKHVXJgI1bD7joy3Qod0otjmdZ4Bvj8vp8uWTKVy7-GvWwndQ4TFSFXOHUMeGGWstJ0jCdsZLgdQAm7VkwpV1CF9SSxUS0TaU-rlKi_yXasoU4X1is3Ppi9Wvy61ku-TZLSrDVcuV2pqVvpSrPiGsfnsHvMc6_MoaWG99TLvo8r5YZrA=s0-d-e1-ft#https://www.gstatic.com/identity/boq/accountsettingsmobile/signintoothersites_saved_passwords_144x144_2eb4d10c5d7b1fe752148d677652a7db.png"
            className="CToWUd bold-stil w-66 h-66"
          />
          {detailKey.body}
        </p>

        <div>
          <button type="button" className="btn btn-primary">
            İşlem yap
          </button>
        </div>

        <div>
          <span className="paragraph p-1">{detailKey.bottom}</span>
        </div>

        <a className="paragraph">
          https://myaccount.google.com/security-checkup
        </a>

        <div>
          <span>
            <small>
              Bu e-posta sizi Google Hesabınız ve hizmetlerinizdeki önemli
              değişiklikler hakkında bilgilendirmek için gönderilmiştir. © 2022
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
              USA
            </small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
