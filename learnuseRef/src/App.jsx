import { useState } from "react";
import { useRef } from "react"

function App() {

  const refElement = useRef("");
  const [name,setName] = useState("Nehaa")
 
  return (
    <>
      <input ref={refElement} type="text" value={name} onChange={(e)=>{
        setName(e.target.value)
      }}></input>
      <button onClick={()=>{
        setName("")
        refElement.current.focus()
      }}>Reset</button>
      <button onClick={()=>{
        refElement.current.style.color="red"
      }}>Handle input</button>
    </>
  )
}

export default App
