import { useRouter } from "next/router";

import react, { useState } from "react";

import Mail from "../components/Mail";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import SolIkonlar from "../components/SolIkonlar";
import SagIkonlar from "../components/SagIkonlar";
import "bootstrap/dist/css/bootstrap.min.css";
import PopUp from "../components/PopUp";
import DetailPage from "../components/DetailPage";

export default function Home() {
  let [yeniMail, setYeniMail] = useState(false)

  let [detailData, setDetailData] = useState(null)  // Detay sayfasını ve maillerin görünürlüğünü yönetmek için bu state oluşturuldu.



  const jsonData= require('../mails.json');
  console.log(jsonData)


 
  return (
    <>
      <Header />

      <Navbar  setYeniMail={setYeniMail} />

      <div className="orta-bolum">
        <SolIkonlar />

        <div className="orta-mailler w-100">
          <nav></nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active tools-none"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <Section />
              
                {

                detailData 
                
                ? // detailData true ise (yani null değilse) DetailPage componenti render edilecek.

                <DetailPage detailKey={detailData} setDetailDataKey={setDetailData} />
               
                 //detailData true olduktan sonra içindeki değeri detailkey yardımıyla detailpage e gönderdim.

                : // detailData false ise (yani null ise) Mail componenti render edilecek.
               
                
                jsonData.mails.map((mail,i)=>(
                  <Mail onClick={() => setDetailData(mail.detail)} key={i} sentKey={mail.sender} contentKey={mail.content} unreadmailKey={mail.unreadmail}/>
                )) 
                
                 // [detailData, setDetailData]
                }

            </div>
          </div>
        </div>

        <SagIkonlar />
      </div>

      <Footer />

      {yeniMail && (

       <PopUp setYeniMail={setYeniMail}/>

      )}
    </>
  );
}
