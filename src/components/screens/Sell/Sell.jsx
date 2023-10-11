import React from "react";
import Head from "next/head";

export const Sell = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>RealEstateX - Real Estate Dapp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,700,100,200,400,600" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
        <link rel="stylesheet" type="text/css" href="./css/sell.css" />
        <link href="./css/styleguide.css" rel="stylesheet" />
      </Head>
      <div className="SELL">
        <div className="div">
          <div className="frame">
            <div className="frame-wrapper">
              <div className="find-buyers-within-wrapper">
                <p className="find-buyers-within">Find Buyers Within Your Area And Nationwide</p>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="frame-2">
                <div className="frame-2">
                  <div className="FIND-BUYERS">Find Buyers</div>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-group">
                <div className="icon-search-wrapper">
                  <img className="icon-search" alt="Icon search" src="./img/icon-search.png" />
                </div>
                <div className="enter-your-house">Enter Your House Address</div>
              </div>
            </div>
            <div className="frame-3">
              <div className="group-2">
                <div className="text-wrapper">RealEstateX</div>
              </div>
              <div className="navbar">
                <div className="text-wrapper-2"><a href="./">Buy</a></div>
                <div className="text-wrapper-3"><a href="./rent">Rent</a></div>
                <div className="text-wrapper-4"><a href="./agent">Agent</a></div>
                <div className="text-wrapper-5"><a href="./sell">Sell</a></div>
                <div className="text-wrapper-6"><a href="./marketplace">Marketplace</a></div>
              </div>
              <div className="frame-4">
                <div className="log-in">Log In</div>
                <div className="frame-5">
                  <div className="text-wrapper-7">Sign Up</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-6">
            <img className="ph-images-thin" alt="Ph images thin" src="./img/ph-images-thin.svg" />
            <p className="your-image-will-show">Your Image Will Show Here</p>
          </div>
          <div className="my-home">My Home</div>
        </div>
      </div>
    </>
  );
};
