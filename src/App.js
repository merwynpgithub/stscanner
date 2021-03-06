import { useState, useEffect } from 'react';
// import Toggle from './components/Toggle';
import Main from './components/Main';
// import { ThemeContext } from './context';
import './App.css';
import Intro from './components/Intro';
import useApp from './hooks/useApp';
import Metrics from './components/Metrics';
import ChartList from './components/ChartList';
import Analysis from './components/Analysis';

import axios from 'axios';

function App() {
  const { search, setSearch, handleClick, error, oview, inc, price, cf, bal } = useApp();
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  //make an axios req to pass name to intro and start heroku server
  const [name, setName] = useState("");
  useEffect(() => {
    axios.get("/title")
    .then(res => setName(res.data.title));
  }, [])

  //check
  let cprice = 0;
  if (price.hasOwnProperty('Time Series (Daily)') && error === "") {
    cprice = Number((Object.values(price["Time Series (Daily)"])[0]["4. close"]));
  }
  const incCheck = Object.keys(inc).length;
  const cfCheck = Object.keys(cf).length;
  const balCheck = Object.keys(bal).length

  return (
    <div className="t-mode">
      
      <Intro name={name}/>
      <Main name={name} search={search} setSearch={setSearch} handleClick={handleClick} error={error} />
      {cprice !== 0 && <Metrics oview={oview} price={cprice} />}
      {cprice !== 0 && incCheck !== 0 && cfCheck!== 0 && balCheck!== 0 &&
      <ChartList oview={oview} inc={inc} price={price} cf={cf} bal={bal} />}
      {cprice !== 0 && incCheck !== 0 && cfCheck!== 0 && <Analysis oview={oview} price={cprice}/>}
    </div>
  );
}

export default App;
