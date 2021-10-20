import React, { useState } from "react";

const Suggestion = (props) => {
  return (
    <>
      {props.BTCSuggestion && props.ETHSuggestion ? (
        <div className="text-white pb-5">
          <div className="d-flex justify-content-center mt-5 text-white text-center">
            <div className="suggestionHeading w-50">SUGGESTION</div>
          </div>
          <div className="mt-4 fs-4 text-center">
            Considering the exchange rate differences of bitcoin in binance and
            coinbase.
            <b>
              <em id="BTCSugg"> {props.BTCSuggestion} </em>
            </b>
            is the better option. <br />
            <button className="btn btn-dark fs-4 mt-3 fw-bold primary-button">
              <a
                className="text-white text-decoration-none"
                href={
                  props.BTCSuggestion === "Coinbase Exchange"
                    ? "https://www.coinbase.com"
                    : "https://www.binance.com/en/trade/BTC_USDT"
                }
                target="_blank"
              >
                {" "}
                Buy
              </a>
            </button>
          </div>
          <div className="mt-4 fs-4 text-center">
            Considering the exchange rate differences of bitcoin in binance and
            coinbase.{" "}
            <b>
              <em>{props.ETHSuggestion} </em>
            </b>{" "}
            is the better option. <br />
            <button className="btn btn-dark fs-4 mt-3 fw-bold primary-button">
              <a
                className="text-white text-decoration-none"
                href={
                  props.ETHSuggestion === "Coinbase Exchange"
                    ? "https://www.coinbase.com"
                    : "https://www.binance.com/en/trade/BTC_USDT"
                }
                target="_blank"
              >
                {" "}
                Buy
              </a>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Suggestion;
