import React from "react";
import "./PreloaderStyle.css";

function Preloader() {
  return (
    <div className="initial">
      <div className="wrapper">
        <div className="circle small-wrap one">
          <div className="circle small"></div>
          <div className="circle small"></div>
          <div className="circle small"></div>
          <div className="circle small"></div>
          <div className="circle small"></div>
          <div className="circle small"></div>
        </div>
        <div className="circle circle-blue one"></div>
        <div className="circle circle-yellow one"></div>
        <div className="circle arc one"></div>
        <div className="circle line-wrap two">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="circle circle-third three"></div>
        <div className="circle red-arc three"></div>
        <div className="circle red-ring"></div>
        <div className="circle circle-red-center three"></div>
        <div className="circle circle-yellow-bg two"></div>
        <div className="circle circle-red two"></div>
        <div className="circle circle-yellow-center two"></div>
        <div className="circle green-arc three"></div>
        <div className="circle circle-fourth four"></div>
        <div className="circle blue-ring four"></div>
        <div className="circle red-ring2 four"></div>
        <div className="circle yellow-bg2 four"></div>
        <div className="circle green-center four"></div>
        <div className="circle yellow-center2 four"></div>
        <div className="circle circle-yellow-fill two"></div>
      </div>
    </div>
  );
}

export default Preloader;
