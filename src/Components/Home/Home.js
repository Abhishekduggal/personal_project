import React from "react";

const Home = () => {
  let picsArray = [
    "https://jornalacores9.pt/wp-content/uploads/2017/12/internet-fixa-e-m%C3%B3vel.jpg",
    "http://www.internethic.com/var/internethic/storage/images/media/images/internethic/prise-de-commande-internethic/17282-1-fre-FR/Prise-de-commande-Internethic.jpg",
    "https://mariussescu.ro/wp-content/uploads/2012/09/Online-Business.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6c/Ghozt_Tramp_-_Business_Communication_Duplicat_model.jpg"
  ];

  let randomPic = Math.floor(Math.random() * picsArray.length);

  return (
    <div>
      <div>Hi, Welcome to my Site</div>
      <img src={picsArray[randomPic]} alt="" />
    </div>
  );
};

export default Home;
