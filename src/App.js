import logo from './logo.svg';
import './App.css';

function App() {
  const productName = ["Apple Watch", "Ipad", "Cavit-C", "Computer Keyboard"]
  return (
    <div className="App">
      <TvActor name={productName[1]} price="$20"></TvActor>
      <TvActor name={productName[3]} price="$66"></TvActor>
      <TvActor name={productName[0]} price="$13.64"></TvActor>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}
function TvActor(props) {
  const style = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px",
    borderRadius: "8px"
  }
  return (
    <div style={style}>
      <h1>This is a {props.name}</h1>
      <p>This Product price is {props.price}. buy from Amazon</p>
    </div>
  )
  
}

export default App;
