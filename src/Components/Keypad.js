import React,{useState} from 'react'
import '../css/Keypad.css'

export default function Keypad({setFirst, setSecond}) {
  const [arr,setArr]=useState("")
  const[negative,setNegative]=useState(true)
  const[onlyOneSign, setonlyOneSign]=useState(true)

  function display(param) {
    if(param==="=") {
      let res=eval(arr);
      setSecond(res+"")
      setArr(res+"")
    }
    else if(param==="N") {
      if(negative) {
      let res="-"+arr;
      setArr(res)
      setFirst(res)
      setNegative(false)
      }
      else {
        let res="";
        for(let i=1;i<arr.length ;i++) 
          res=res+arr[i]
        setArr(res)
        setFirst(res)
        setNegative(true)
      }
    }
    else if(param==="C") {
        var t = arr.slice(0, -1);
        setArr(t)
        setFirst(t)
    }
    else if (onlyOneSign &&( param==='+' || param==='-' || param==='*' || param==='/' || param==='%')) {
      const ip=arr
    setArr(ip+param)
    setFirst(ip+param)
    setonlyOneSign(false)
    }
    else if(param==='+' || param==='-' || param==='*' || param==='/' || param==='%') {
      
      var t = arr.slice(0, -1);
      t=t+param;
      setArr(t)
      setFirst(t)
      setArr(t)
    }
    else {
      const ip=arr
    setArr(ip+param)
    setFirst(ip+param)
    setonlyOneSign(true)
    }
  }
  return (
    <>
    
    <div className='cont'>

      
      <button onClick={()=>display("C")}>C</button>
      <button onClick={()=>display("N")}>+/-</button>
      <button onClick={()=>display("%")}>%</button>
      <button onClick={()=>display("/")}>/</button>

      <button onClick={()=>display("7")}>7</button>
      <button onClick={()=>display("8")}>8</button>
      <button onClick={()=>display("9")}>9</button>
      <button onClick={()=>display("*")}>x</button>
      
      <button onClick={()=>display("4")}>4</button>
      <button onClick={()=>display("5")}>5</button>
      <button onClick={()=>display("6")}>6</button>
      <button onClick={()=>display("-")}>-</button>

      <button onClick={()=>display("1")}>1</button>
      <button onClick={()=>display("2")}>2</button>
      <button onClick={()=>display("3")}>3</button>
      <button onClick={()=>display("+")}>+</button>

      <button onClick={()=>display("0")}>0</button>
      <button onClick={()=>display(".")}>.</button>
      <button className='equalsTo' onClick={()=>display("=")}>=</button>
    
    </div>

    </>
  )
}
