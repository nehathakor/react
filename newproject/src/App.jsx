import { useState } from "react";

function App() {

  let [counter,setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20){
    setCounter(counter+1);
    }
  }

  const decValue = () => {
    if(counter > 0){
    setCounter(counter-1);
    }
  }

  return (
    <>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
