import { useState } from 'react'
import './App.css'
import Fetch from './Fetch'
import WindowEvent from './WindowEvent'
import Title from './Title'

function App() {

  let [flag, setFlag] = useState(true)

  return (
    <>
      <button onClick={() => setFlag(!flag)}>{flag ? "FetchData" : "Window's Configuration"}</button><br />
      {flag ? <WindowEvent/> : <Fetch/>}
      <Title flag={flag}/>
    </>
  )
}

export default App
