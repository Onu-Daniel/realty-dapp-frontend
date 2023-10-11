import React from "react";
import Head from "next/head";

export function Agent() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>RealEstateX - Real Estate Dapp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,700,100,200,400,600" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
        <link rel="stylesheet" type="text/css" href="./css/agent.css" />
        <link href="./css/styleguide.css" rel="stylesheet" />
      </Head>
      <div className="agent">
        <div className="div">
          <div className="frame" />
          <div className="frame-2" />
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="frame-3" />
              <div className="frame-wrapper">
                <div className="search-for-your-wrapper">
                  <p className="search-for-your">Search For Your Agent From More Than A Million Agents</p>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="frame-4">
                  <div className="frame-4">
                    <div className="FIND-AN-AGENT">Find An Agent</div>
                  </div>
                </div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper">Agent</div>
              </div>
              <div className="city-or-state-wrapper">
                <div className="text-wrapper">City Or State</div>
              </div>
              <div className="frame-6">
                <div className="text-wrapper">Agent Name</div>
              </div>
              <div className="frame-7">
                <div className="text-wrapper-2">Search</div>
              </div>
              <div className="frame-8">
                <div className="group">
                  <div className="text-wrapper-3">RealEstateX</div>
                </div>
                <div className="navbar">
                  <div className="text-wrapper-4"><a href="./">Buy</a></div>
                  <div className="text-wrapper-5"><a href="./rent">Rent</a></div>
                  <div className="text-wrapper-6"><a href="./agent">Agent</a></div>
                  <div className="text-wrapper-7"><a href="./sell">Sell</a></div>
                  <div className="text-wrapper-8"><a href="./marketplace">Marketplace</a></div>
                </div>
                <div className="frame-9">
                  <div className="log-in">Log In</div>
                  <div className="frame-10">
                    <div className="text-wrapper-9">Sign Up</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="why-get-an-agent">Why Get An Agent?</div>
          <div className="text-wrapper-10">The Agent’s Advantage</div>
          <div className="overlap">
            <div className="consumer-protection">Consumer Protection</div>
            <p className="the-national">
              <br />
              the National Association Of Agents Works To Support Thriving Neighborhoods Where Agents Live And Work On
              Behalf Of Homebuyers.
            </p>
          </div>
          <p className="the-majority-of">
            <br />
            the Majority Of People&#39;s Largest Investment Will Be In A Home, But Not All Real Estate Brokers Are Created
            Equal.&nbsp;&nbsp;An Agent’s Experience And Education Will Help You Buy The House Of Your Dreams.
          </p>
        </div>
      </div>
    </>
  );
};
