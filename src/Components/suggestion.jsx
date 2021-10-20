const Suggestion = () => {
  return (
    <div className="text-white pb-5">
      <div className="d-flex justify-content-center mt-5 text-white text-center">
        <div className="suggestionHeading w-50">SUGGESTION</div>
      </div>
      <div className="mt-4 fs-4 text-center">
        Considering the exchange rate differences of bitcoin in binance and
        ethereum.
        <b>
          <em>Coinbase </em>
        </b>
        is the better option. <br />
        <button className="btn btn-dark fs-4 mt-3 fw-bold primary-button">
          Buy Now
        </button>
      </div>
      <div className="mt-4 fs-4 text-center">
        Considering the exchange rate differences of bitcoin in binance and
        ethereum.{" "}
        <b>
          <em>Binance </em>
        </b>{" "}
        is the better option. <br />
        <button className="btn btn-dark fs-4 mt-3 fw-bold primary-button">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Suggestion;
