import './styles/toggle.css';
import sun from '../images/sun.png';
import moon from '../images/moon.png';
import { useContext } from 'react';
import { ThemeContext } from '../context';

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({type: "TOGGLE"});
  };
  
  return (
    <div className="t">
      <img src={sun} alt="sun" className="t-icon" />
      <img src={moon} alt="moon" className="t-icon" />
      <div className="t-btn" 
        onClick={handleClick}
        style={{left: theme.state.darkMode ? "0" : "25px", transition: "0.3s"}}
      >

      </div>
    </div>
  );
}

export default Toggle;