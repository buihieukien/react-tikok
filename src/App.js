import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Content from './Content';


function App() {

  const arr = ['red', 'green', 'yellow', 'blue']
  const [color, setColor] = useState('red')
  console.log(color)
  
  const [show, setShow] = useState(false)

  const handleClick = () => {

    const random =  Math.floor(Math.random() * arr.length)
    setColor(arr[random])
  }

  const handleClick1 = () => {
    setShow(!show)
  }

  return (
      <div>
        <div style={{ backgroundColor: color, with: '200px', height: '200px'}}
        onClick={handleClick}></div>

        <button onClick={handleClick1}>random</button>
        {show && <Content/>}
      </div>
  );
}

export default App;
