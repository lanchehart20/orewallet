import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./components/homepage/Homepage";
import "./App.css";
import Popup from "./components/popup/Popup";
const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popUpData, setPopUpdata] = useState({});
  return (
    <React.Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHove
      />
      <Homepage setPopUpdata={setPopUpdata} setShowPopup={setShowPopup} />
      {showPopup ? (
        <Popup
          popUpData={popUpData}
          setPopUpdata={setPopUpdata}
          setShowPopup={setShowPopup}
        />
      ) : null}
    </React.Fragment>
  );
};

export default App;
