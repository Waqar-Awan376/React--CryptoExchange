import React from "react";

const RateIndicator = (props) => {
  return (
    <>
      {props.binanceBTC &&
      props.binanceETH &&
      props.coinbaseBTC &&
      props.coinbaseETH &&
      props.binanceExchangeLogo &&
      props.coinbaseExchangeLogo ? (
        <div className="row text-white d-flex justify-content-center">
          <div className="col-md-6 text-center p-2">
            <div className="exchangeHeading w-75">
              {props.binanceBTC.market.name}
              <span>
                &nbsp;
                <img
                  src={props.binanceExchangeLogo}
                  ALT="EXCHANGE LOGO"
                  width="50"
                />
              </span>
            </div>
            <br />
            <div className="exchangeHeadingInner w-sm-25 mt-5">
              {props.binanceBTC.base}
            </div>
            <div className="priceIndicator mt-4">{props.binanceBTC.last}</div>

            <div className="exchangeHeadingInner w-sm-25 mt-5">
              {props.binanceETH.base}
            </div>
            <div className="priceIndicator mt-4">{props.binanceETH.last}</div>
          </div>
          <div className="col-md-6 text-center p-2">
            <div className="exchangeHeading w-75">
              {props.coinbaseBTC.market.name}
              <span>
                &nbsp;
                <img
                  src={props.coinbaseExchangeLogo}
                  ALT="EXCHANGE LOGO"
                  width="50"
                />
              </span>
            </div>
            <br />
            <div className="exchangeHeadingInner w-sm-25 mt-5">
              {props.coinbaseBTC.base}
            </div>
            <div className="priceIndicator mt-4">{props.coinbaseBTC.last}</div>

            <div className="exchangeHeadingInner w-sm-25 mt-5">
              {props.coinbaseETH.base}
            </div>
            <div className="priceIndicator mt-4">{props.coinbaseETH.last}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RateIndicator;
