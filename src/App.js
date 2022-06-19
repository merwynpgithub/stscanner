import { useContext } from 'react';
import Toggle from './components/Toggle';
import Main from './components/Main';
import { ThemeContext } from './context';
import './App.css';
import Intro from './components/Intro';
import useApp from './hooks/useApp';
import Metrics from './components/Metrics';
import ChartList from './components/ChartList';
import Analysis from './components/Analysis';

function App() {
  const { search, setSearch, handleClick, error, oview, inc, price, cf } = useApp();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  //check
  let cprice = 0;
  if (price.hasOwnProperty('Time Series (Daily)') && error === "") {
    cprice = Number((Object.values(price["Time Series (Daily)"])[0]["4. close"]));
  }
  const incCheck = Object.keys(inc).length;
  const cfCheck = Object.keys(cf).length;

  return (
    <div style={{height: "150vh",backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white", transition: "0.3s"}}>
      <Toggle />
      <Intro />
      <Main search={search} setSearch={setSearch} handleClick={handleClick} error={error} />
      {cprice !== 0 && <Metrics oview={oview} price={cprice} />}
      {cprice !== 0 && incCheck !== 0 && cfCheck!== 0 && <ChartList oview={oview} inc={inc} price={price} cf={cf} />}
      {cprice !== 0 && incCheck !== 0 && cfCheck!== 0 && <Analysis oview={oview} price={cprice}/>}
    </div>
  );
}

export default App;
