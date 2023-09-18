import React from "react";
import "./PreloaderStyle.css";

function Preloader() {
  return (
    <div className="initial">
      <div class="wrapper">
        <div class="circle small-wrap one">
          <div class="circle small"></div>
          <div class="circle small"></div>
          <div class="circle small"></div>
          <div class="circle small"></div>
          <div class="circle small"></div>
          <div class="circle small"></div>
        </div>
        <div class="circle circle-blue one"></div>
        <div class="circle circle-yellow one"></div>
        <div class="circle arc one"></div>
        <div class="circle line-wrap two">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="circle circle-third three"></div>
        <div class="circle red-arc three"></div>
        <div class="circle red-ring"></div>
        <div class="circle circle-red-center three"></div>
        <div class="circle circle-yellow-bg two"></div>
        <div class="circle circle-red two"></div>
        <div class="circle circle-yellow-center two"></div>
        <div class="circle green-arc three"></div>
        <div class="circle circle-fourth four"></div>
        <div class="circle blue-ring four"></div>
        <div class="circle red-ring2 four"></div>
        <div class="circle yellow-bg2 four"></div>
        <div class="circle green-center four"></div>
        <div class="circle yellow-center2 four"></div>
        <div class="circle circle-yellow-fill two"></div>
      </div>
    </div>
  );
}

export default Preloader;
