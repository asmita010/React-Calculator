import React,{useState} from 'react'
import Screen from './Screen'
import Keypad from './Keypad'
import '../css/App.css'

export default function App() {
   const[first,setFirst] =useState("")
   const[second,setSecond] =useState("0")
  return (
    <>
      
    <div className='outer-cont'>
  
        <div className='cal-cont'>
            <span className='cal-bg'>
                <Screen first={first} second={second}></Screen>
                <Keypad setFirst={setFirst} setSecond={setSecond}></Keypad>
            </span>
        </div>
    </div>
    </>
  )
}
