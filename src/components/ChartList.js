import { useState } from 'react';
import './styles/chart.css';
import BarChart from './BarChart';
import LineChart from './LineChart';

function ChartList({ oview, inc, price, cf, bal}) {
  const [horizon, setHorizon] = useState("quarterlyReports");
  const check = Object.keys(inc).length;
  const name = oview.Symbol;

  function handleHorizonChange(e) {
    setHorizon(e.target.value);
  }

  if (check !== 0)
  return (
    <>
    <div className="c">
      <div className="c-h">
        <select value={horizon} onChange={handleHorizonChange}>
          <option value="quarterlyReports">QUARTERLY</option>
          <option value="annualReports">ANNUAL</option>
        </select>
      </div>
      <div className="c-list">
        <div className="chart">
          <LineChart price={price} name={name} type="price" />
        </div>
        <div className="chart">
          <BarChart info={inc} name={name} type="net_income" horizon={horizon} bgcolor="rgba(40,130,200,0.5)" bdcolor="rgba(40,130,200,0)"/>
        </div>
        <div className="chart">
          <BarChart info={inc} name={name} type="revenue" horizon={horizon} bgcolor="rgba(255, 165, 0, 0.5)" bdcolor="rgba(255, 165, 0, 0)" />
        </div>
        <div className="chart">
          <BarChart info={inc} name={name} type="ebitda" horizon={horizon} bgcolor="rgba(106, 90, 205, 0.5)" bdcolor="rgba(106, 90, 205, 0)" />
        </div>
        <div className="chart">
          <BarChart info={cf} name={name} type="cash_flow" horizon={horizon} bgcolor="rgba(64, 182, 150, 0.5)" bdcolor="rgba(64, 182, 150, 0)" />
        </div>
        <div className="chart">
          <BarChart info={bal} name={name} type="debt" horizon={horizon} bgcolor="rgba(64, 182, 150, 0.5)" bdcolor="rgba(64, 182, 150, 0)" />
        </div>
      </div>

    </div>
    </>
  );
}

export default ChartList;