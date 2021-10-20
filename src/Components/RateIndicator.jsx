const RateIndicator = () => {
  return (
    <>
      <div className="row text-white d-flex justify-content-center">
        <div className="col-md-6 text-center p-2">
          <div className="exchangeHeading w-75">Binance</div>
          <br />
          <div className="exchangeHeadingInner w-sm-25 mt-5">Bitcoin</div>
          <div className="priceIndicator mt-4">6666</div>

          <div className="exchangeHeadingInner w-sm-25 mt-5">Ethereum</div>
          <div className="priceIndicator mt-4">6666</div>
        </div>
        <div className="col-md-6 text-center p-2">
          <div className="exchangeHeading w-75">Coinbase</div>
          <br />
          <div className="exchangeHeadingInner w-sm-25 mt-5">Bitcoin</div>
          <div className="priceIndicator mt-4">6666</div>

          <div className="exchangeHeadingInner w-sm-25 mt-5">Ethereum</div>
          <div className="priceIndicator mt-4">6666</div>
        </div>
      </div>
    </>
  );
};

export default RateIndicator;
