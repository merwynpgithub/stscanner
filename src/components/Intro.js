import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles/intro.css';
function Intro() {
  const [name, setName] = useState("");
  useEffect(() => {
    axios.get("/title")
    .then(res => setName(res.data.title));
  }, [])
  return (
    <div className="intro">
      <h2>{name}</h2>
    </div>
  );
}
export default Intro;