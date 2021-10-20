import './App.css';
import TopHeading from './Components/topHeading';
import Layout from './Components/layout';
import RateIndicator from './Components/RateIndicator';
import Suggestion from './Components/suggestion';
import { useEffect, useState } from 'react';

function App() {
  const [binanceBitcoin, setBinanceBitcoin] = useState();
  const [binanceEthereum, setBinanceEthereum] = useState();
  const [coinbaseBitcoin, setCoinbaseBitcoin] = useState();
  const [coinbaseEthereum, setCoinbaseEthereum] = useState();
  const [BTCSuggestion, setBTCSuggestion] = useState();
  const [ETHSuggestion, setETHSuggestion] = useState();
  const [allowedToRender, setAllowedToRender] = useState(false);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/exchanges/binance').then((responseData) => {
      return responseData.json();
    }).then((data) => {
      const binBTC = data['tickers'].find((element) => {
        if (element['base'] === 'BTC') {
          return true;
        }
      });
      setBinanceBitcoin(binBTC)
    }).catch(err => console.log());

    fetch('https://api.coingecko.com/api/v3/exchanges/binance').then((responseData) => {
      return responseData.json();
    }).then((data) => {
      const binBTC = data['tickers'].find((element) => {
        if (element['base'] === 'ETH') {
          return true;
        }
      });
      setBinanceEthereum(binBTC)
    }).catch(err => console.log());


    fetch('https://api.coingecko.com/api/v3/exchanges/gdax').then((responseData) => {
      return responseData.json();
    }).then((data) => {
      const cbBTC = data['tickers'].find((element) => {
        if (element['base'] === 'BTC') {
          return true;
        }
      });
      setCoinbaseBitcoin(cbBTC)
    }).catch(err => console.log());

    fetch('https://api.coingecko.com/api/v3/exchanges/gdax').then((responseData) => {
      return responseData.json();
    }).then((data) => {
      const cbETH = data['tickers'].find((element) => {
        if (element['base'] === 'ETH') {
          return true;
        }
      });
      setCoinbaseEthereum(cbETH);
    }).catch(err => console.log(err));
    if (binanceBitcoin && binanceEthereum && coinbaseBitcoin && coinbaseEthereum) {
      if (binanceBitcoin.last > coinbaseBitcoin.last) {
        setBTCSuggestion("Coinbase Exchange");
      } else {
        setBTCSuggestion("Binance");
      }
      if (binanceEthereum > coinbaseEthereum) {
        setETHSuggestion("Coinbase Exchange");
      } else {
        setETHSuggestion("Binance");
      }
    }

  }, [binanceBitcoin, binanceEthereum, coinbaseBitcoin, coinbaseEthereum]);
  return (
    <>
      <Layout>
        <div className="pt-3">
          <TopHeading />
          {(binanceBitcoin && binanceEthereum && coinbaseBitcoin && coinbaseEthereum) ? <RateIndicator binanceBTC={binanceBitcoin} binanceETH={binanceEthereum} coinbaseBTC={coinbaseBitcoin} coinbaseETH={coinbaseEthereum} /> : <h3 className="text-white text-center">Loading Data...!!!</h3>}
          {(BTCSuggestion && ETHSuggestion) ? <Suggestion BTCSuggestion={BTCSuggestion} ETHSuggestion={ETHSuggestion} /> : <h3 className="text-white text-center">Loading Data...!!!</h3>}
        </div>
      </Layout>
    </>
  );
}

export default App;
