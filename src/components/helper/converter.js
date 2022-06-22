/**
 * 
 * @param {*} data 
 * @param {*} name 
 * @returns Object with labelname, data and bar chart numbers
 */

 const converter = (data, name, type, horizon ) => {
  if (type === "revenue") {
    const labelName = name + " Revenue (Billions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => statData.push(Math.floor(parseInt(data.totalRevenue) / Math.pow(10, 9))));
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "net_income") {
    const labelName = name + " Net Income (Billions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => statData.push(Number(parseInt(data.netIncome) / Math.pow(10, 9))));
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "ebitda") {
    const labelName = name + " EBITDA (Billions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => statData.push(Math.floor(parseInt(data.ebitda) / Math.pow(10, 9))));
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "cash_flow") {
    const labelName = name + " Free Cash Flow (Billions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => {
      const opcf = data.operatingCashflow === "None" ? 0 : parseInt(data.operatingCashflow) / Math.pow(10, 9);
      const capex = data.capitalExpenditures === "None" ? 0 : parseInt(data.capitalExpenditures) / Math.pow(10, 9);
      const free_cf = opcf - capex;
      statData.push(free_cf);
    });
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "debt") {
    const labelName = name + " Debt (Billions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => {
      const debt = parseInt(data.totalLiabilities) / Math.pow(10, 9);
      statData.push(debt);
    });
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "stock") {
    const labelName = name + " Shares Outstanding (Billions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => {
      const stock = parseFloat(((data.commonStockSharesOutstanding) / Math.pow(10, 9)).toFixed(2));
      statData.push(stock);
    });
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "price") {
    const labelName = name + " Price (100 data points)";

    const obj = data["Time Series (Daily)"];
    const labelData = [];
    for (const key in obj) {
      labelData.push(key);
    }
    labelData.reverse();

    const statData = [];
    for (const key in obj) {
      statData.push(Number(obj[key]["4. close"]));
    }
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "eps") {
    let epsHorizon = "annualEarnings";
    // if (horizon === "annualReports") epsHorizon = "annualEarnings";
    // if (horizon === "quarterlyReports") epsHorizon = "quarterlyEarnings";
    const labelName = name + " EPS (Annual)";

    const labelData = [];
    data[epsHorizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[epsHorizon].forEach(data => {
      const eps = parseFloat(data.reportedEPS);
      statData.push(eps);
    });
    statData.reverse();

    return { labelData, labelName, statData };
  }

};

export default converter;