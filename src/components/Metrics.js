import './styles/metrics.css';

function Metrics({ oview, price }) {
  const check = Object.keys(oview).length;
  const cap = (parseInt(oview.MarketCapitalization) / Math.pow(10, 9)).toFixed(2);
  const div = "$" + oview["DividendPerShare"] || "-";
  
  if (check !== 0)
  return (
    <div className="metrics">
      <div className="title">
        {oview.Name}
      </div>
      <div className="m-d">

      <div className="m">
        <div className= "m-id">
          <p>Mkt cap</p>
          <p>Price</p>
          <p>Div yield</p>
        </div>
        <div className="m-data">
          <p>{cap}B</p>
          <p>{price}$</p>
          <p>{div}</p>
        </div>
      </div>

      <div className="m">
        <div className= "m-id">
          <p>P/E (FWD)</p>
          <p>P/E (TTM)</p>
        </div>
        <div className="m-data">
          <p>{oview.ForwardPE}</p>
          <p>{oview.TrailingPE}</p>
        </div>
      </div>

      <div className="m">
        <div className= "m-id">
          <p>52-wk high</p>
          <p>52-wk low</p>
        </div>
        <div className="m-data">
          <p>{oview["52WeekHigh"]}</p>
          <p>{oview["52WeekLow"]}</p>
        </div>
      </div>

        <div className="m">
          <div className= "m-id">
            <p>50 SMA</p>
            <p>200 SMA</p>
          </div>
          <div className="m-data">
            <p>{oview["50DayMovingAverage"]}</p>
            <p>{oview["200DayMovingAverage"]}</p>
          </div>
        </div>

        <div className="m">
          <div className= "m-id">
            <p>Div. Date</p>
            <p>Ex Div. Date</p>
          </div>
          <div className="m-data">
            <p>{oview["DividendDate"]}</p>
            <p>{oview["ExDividendDate"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metrics;