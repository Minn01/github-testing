import { useState } from 'react'
import './App.css'

function App() {
  const [randomNum, setRandomNum] = useState(0);
  const [started, setStarted] = useState(false);

  return (
    <>
      <div>
        <h1>Generate Random Number</h1>

        <button onClick={
          () => {
            setRandomNum(Math.floor(Math.random() * 100))
            setStarted(true);
          }
        }>Generate</button>
        
        <RandomNumber started={started} randomNum={randomNum} />
      </div>
    </>
  )
}

function RandomNumber({started, randomNum}) {
  if (started) {
    return (
      <div className="random-number">
        <h2>{randomNum}</h2>
      </div>
    )
  }
}

export default App
