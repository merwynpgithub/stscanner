import './styles/intro.css';
function Intro({ name }) {
  return (
    <div className="intro">
      <h2>{name}</h2>
    </div>
  );
}
export default Intro;