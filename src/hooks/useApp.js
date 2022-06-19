import axios from "axios";
import { useState } from "react";

/**
 * return object with state data
 */
function useApp() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [oview, setOview] = useState({});
  const [inc, setInc] = useState({});
  const [price, setPrice] = useState({});
  const [cf, setCf] = useState({});

  const handleClick = e => {
    e.preventDefault();

    const url = "/ticker/" + search;
    axios.get(url)
    .then(res => {
      const check = Object.keys(res.data).length;
      const maxCheck = res.data["Ismaxedout"];
      if (check !== 0 && maxCheck === false) {
        setError("");
        setOview(res.data);

        //set income data
        const incUrl = "/ticker/" + search + "/inc";
        axios.get(incUrl)
        .then(res => {
          const check2 = Object.keys(res.data).length;
          if (check2 !== 0)
          setInc(res.data);
        })
        .catch(err => setError("Failed to get data"));

        //set price data
        const prUrl = "/ticker/" + search + "/price";
        axios.get(prUrl)
        .then(res => {
          const check2 = Object.keys(res.data).length;
          if (check2 !== 0)
          setPrice(res.data);
        })
        .catch(err => setError("Failed to get data"));

        //set cash flow data
        const cfUrl = "/ticker/" + search + "/cf";
        axios.get(cfUrl)
        .then(res => {
          const check2 = Object.keys(res.data).length;
          if (check2 !== 0)
          setCf(res.data);
        })
        .catch(err => setError("Failed to get data"));

        setSearch("");
      } else if (maxCheck === true) {
        setError("Please wait and try in some time");
      } else {
        setError("Enter a valid ticker, eg. AAPL, SHOP");
      }
    })
    .catch(err => setError("Failed to get data"));
     
  } 

  return {
    search, setSearch, handleClick, error, oview, inc, price, cf
  };
}

export default useApp;