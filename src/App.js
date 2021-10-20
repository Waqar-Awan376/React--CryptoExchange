import logo from './logo.svg';
import './App.css';
import TopHeading from './Components/topHeading';
import Layout from './Components/layout';
import RateIndicator from './Components/RateIndicator';
import Suggestion from './Components/suggestion';

function App() {
  return (
    <>
      <Layout>
        <div className="pt-3">
          <TopHeading />
          <RateIndicator />
          <Suggestion />
        </div>
      </Layout>
    </>
  );
}

export default App;
