import './styles/intro.css';
function Intro({ name }) {
  if (name === "") 
    return (
      <div className="intro">
        <h2>Loading...</h2>
      </div>
    );
  return (
    <div className="intro">
      <h2>{name}</h2>
    </div>
  );
}
export default Intro;