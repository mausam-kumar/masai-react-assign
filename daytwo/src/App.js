import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
import Todo from "./components/Todo";


function App() {

  const [value,setValue] = useState(0)

  const handlePlusClick = () => {
    setValue(value+1)
  }

  const handleMinusClick = () => {
    setValue(value-1)
  }

  const doubleValue = () => {
    setValue(value*2)
  }

  return (
    <div className="App">

      {/* We part first assignment */}
      {/* <h1>Counter</h1>
      <h2>{value}</h2>
      <button onClick={handlePlusClick}>Increment</button>
      <button onClick={handleMinusClick}>Decrement</button>
      <button onClick={doubleValue}>Double</button> */}

      <Todo />

    </div>
  );
}

export default App;
