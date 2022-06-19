import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineExpandAlt } from "react-icons/ai";

import converter from "./helper/converter";
import './styles/chart.css'

import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);


function LineChart({ price, name, type }) {
  const converterResult = converter(price, name, type);

  const [position, setPosition] = useState("c-small");

  function handleClick(e) {
    position === "c-small" ? setPosition("c-big") : setPosition("c-small");
  }
  
  const data = {
    labels: converterResult.labelData,
    datasets: [
      {
        label: converterResult.labelName,
        fill: false,
        lineTension: 0.01,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,133,0,1)',
        borderWidth: 2,
        data: converterResult.statData,
        radius: 0
      }
    ]
  };

  const options = {
    title:{
      display:true,
      text:'Stock Data',
      fontSize:20
    },
    legend:{
      display:true,
      position:'right'
    }
  };

  return (
    <>
      {position === "c-big" &&
      <div className="screen">
        <div  className="c-big">
          <div><button className="btn" onClick={handleClick}><AiOutlineClose /></button></div>
          <Line
          data={data}
          options={options}
          height={300}
          width={400}
        />
        </div>
      </div>
    }
    {position === "c-small" &&
      <div className="c-small">
      <div className="btn" onClick={handleClick}><button><AiOutlineExpandAlt /></button></div>
      <Line
          data={data}
          options={options}
          height={300}
          width={400}
        />
      </div>
    }
    </>
  );
}

export default LineChart;