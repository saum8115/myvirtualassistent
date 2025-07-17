import React, { useState,createContext } from 'react'
 import run from '../gemini'; 


export const Datacontext=createContext()

const Usercontext = ({children}) => {
    const [speaking, setSpeaking] = useState(false)
    const [prompt, setPrompt] = useState("Listening...")
    const [response, setResponse] = useState(false)

    function speak(text){
let text_speak=new SpeechSynthesisUtterance(text)
text_speak.volume=1;
text_speak.rate=1;
text_speak.pitch=1;
text_speak.lang="hi-GB"
window.speechSynthesis.speak(text_speak)
    }
async function aiResponse(prompt){
let text=await run(prompt)
let newText=text.split("**")&&text.split("*")&&text.replace("google","Saumya Chaubey")&&text.replace("Google","Saumya Chaubey")
setPrompt(newText)
speak(newText)
setResponse(true)
setTimeout(()=>{
setSpeaking(false)
},10000)

}

let speechRecognition=window.SpeechRecognition|| window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=((e)=>{
let currentIndex=e.resultIndex
let transcript=e.results [currentIndex][0].transcript
setPrompt(transcript)
takeCommand(transcript.toLowerCase())
})
function takeCommand(command){
    if(command.includes("open")&& command.includes("youtube")){
        window.open("https://www.youtube.com/","_blank")
        speak("opening Youtube")
        setResponse(true)
        setPrompt("opening youtube....")
        setTimeout(()=>{
        setSpeaking(false)
        },10000)
    }
    else if(command.includes("open")&& command.includes("youtube")){
        window.open("https://www.google.com/","_blank")
        speak("opening Google")
         setResponse(true)
        setPrompt("opening Google....")
        setTimeout(()=>{
        setSpeaking(false)
        },10000)
    }
     else if(command.includes("open")&& command.includes("youtube")){
        window.open("https://www.instagram.com/","_blank")
        speak("opening Instagram")
         setResponse(true)
        setPrompt("opening Instagram....")
        setTimeout(()=>{
        setSpeaking(false)
        },10000)
    }
        else if(command.includes("time")){
            let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
         setResponse(true)
        setPrompt(time)
         setTimeout(()=>{
        setSpeaking(false)
        },5000)
        }
     else if(command.includes("date")){
            let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
         setResponse(true)
        setPrompt(date)
         setTimeout(()=>{
        setSpeaking(false)
        },10000)

        }
else{
    aiResponse(command)
}
}
    let value={
     recognition,
     speaking,
     setSpeaking,
     prompt,
     setPrompt,
     response,
     setResponse
    }
  return (
    <div>
        <Datacontext.Provider value={value}> 
            {children}
            </Datacontext.Provider>
   
 </div>
  )

}



export default Usercontext