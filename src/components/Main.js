import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles/main.css';

function Main({ name, search, setSearch, handleClick, error }) {
  if (name === "")
    return <div className="lds-dual-ring"></div>;

  if (name !== "")
    return (
      <div className="main">
        <form>
          <TextField 
          className = "textfield" id="standard-basic" 
          label="Ticker" variant="standard"
          value={search}
          onChange={e => setSearch(e.target.value.toUpperCase())}
          required/>
          <Button 
          variant="contained" 
          color="grey" 
          sx={{ m: 2 }}
          style={{ border: '2px solid' }}
          onClick={handleClick}
          required
          >
          Search
        </Button>
        {<div className="info"><strong>**Upto 2 searches per minute..</strong></div>}
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    );
}
export default Main;