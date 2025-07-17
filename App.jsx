import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/ai.jpg"
import { CiMicrophoneOn } from "react-icons/ci";
import { Datacontext } from './context/Usercontext';
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"
const App = () => {
  let {recognition,speaking, setSpeaking,prompt,setPrompt,response,setResponse}=useContext(Datacontext)
  return (
<div className='main'>
  <img src={va} alt='' id='shifra'/>
  <span>I'm Shifra, Your Advanced Virtual Assistent</span>
  {!speaking? 
  <button onClick={()=>{
    setPrompt("listening...")
  setSpeaking(true)
  setResponse(false)
recognition.start()

}}>Click here <CiMicrophoneOn /></button> 
:  
<div className='response'>
  {!response ? <img src={speakimg} alt='' id='speak'/>
  :
   <img src={aigif} alt='' id='aigif'/>
  }

<p>{prompt}</p>
</div>
  }
</div>

)
}

export default App