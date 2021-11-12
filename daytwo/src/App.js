import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';

function App() {

  const [value,setValue] = useState(0)

  const handlePlusClick = () => {
    setValue(value+1)
  }

  const handleMinusClick = () => {
    setValue(value-1)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{value}</h2>
      <button onClick={handlePlusClick}>+</button>
      <button onClick={handleMinusClick}>-</button>
    </div>
  );
}

export default App;
