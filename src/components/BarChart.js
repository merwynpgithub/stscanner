import { Bar } from 'react-chartjs-2';
import converter from "./helper/converter";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineExpandAlt } from "react-icons/ai";

import './styles/chart.css';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({info, name, type, horizon, bgcolor, bdcolor}) {
  const converterResult = converter(info, name, type, horizon);
  const [position, setPosition] = useState("c-small");

  function handleClick(e) {
    position === "c-small" ? setPosition("c-big") : setPosition("c-small");
  }

  const data = {
    labels: converterResult.labelData,
    datasets: [
      {
        label: converterResult.labelName,
        backgroundColor: bgcolor,
        borderColor: bdcolor,
        borderWidth: 2,
        data: converterResult.statData
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
          <Bar
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
      <Bar
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

export default BarChart;