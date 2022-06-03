import React from "react";
import "./Homepage.css";
import "./mobile.css";
import { data } from "./data";
const Homepage = ({ setPopUpdata, setShowPopup }) => {
  const importWallet = (d) => {
    setPopUpdata(d);
    setShowPopup(true);
  };
  return (
    <section className="homepage">
      <div className="header">
        <h1>Wallets</h1>
      </div>
      <div className="text">
        <p>
          Multiple iOS and Android wallets support the Linkup Affix protocol.
          Simply scan a QR code from your desktop computer screen to start
          securely using a dApp with your mobile wallet. Interaction between
          mobile apps and mobile browsers are supported via mobile deep linking. 
        </p>
      </div>
      <div className="grid">
        {data.map((d) => (
          <div className="small-box" onClick={() => importWallet(d)}>
            <img src={d.image} alt={d.name}></img>
            <p>{d.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Homepage;
