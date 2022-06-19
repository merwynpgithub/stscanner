import './styles/metrics.css';
function Analysis({ oview, price }) {
  const check = Object.keys(oview).length;
  const sma200 = Number(oview["200DayMovingAverage"]);
  const valueIndex = (sma200 - price) / sma200;
  const valueIndexPercent = Math.abs(parseInt(valueIndex * 100)) + "%";
  const peratio = Number(oview.ForwardPE);
  const spy = 15.97;
  const pediff = peratio - spy;
  if (check !== 0)
  return (
    <div className="metrics">
      <div className= "analysis">
      {valueIndex <= 0 && <h4>{oview.Name} trades at <span style={{color: "green", fontWeight: "bold"}}> {price}$</span> and is <span style={{color: "green", fontWeight: "bold"}}> NOT UNDERVALUED</span> relative to its 200 Day Moving Average by {valueIndexPercent}</h4>}
      {valueIndex > 0 && <h4>{oview.Name} trades at <span style={{color: "green", fontWeight: "bold"}}> {price}$</span> and is <span style={{color: "red", fontWeight: "bold"}}>UNDERVALUED</span> relative to its 200 Day Moving Average by {valueIndexPercent}</h4>}
      <h4>{oview.Name} trades at <span style={{color: "red", fontWeight: "bold"}}> {peratio}</span> times earnings.
      </h4>
      <h4>The S&P 500 trades at <span style={{color: "green", fontWeight: "bold"}}> {spy}</span> times earnings.</h4>
      <h4>In the current high interest rate environment, <span style={{color: "green", fontWeight: "bold"}}>Free Cash Flow</span> is important to analyze the company's sustained growth.
      </h4>
      <h4>Cash flow should be positive and rise annually/quarterly.</h4>
      <p style={{fontSize: "12px", fontWeight: "bold"}}>**This app can be improved with premium access to market data. </p>
      <p style={{fontSize: "12px", fontWeight: "bold"}}>**Free developer api has limited data and requests. </p>

      </div>
    </div>
  );
}

export default Analysis;