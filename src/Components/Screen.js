import React from 'react'
import '../css/Screen.css'
export default function Screen({first,second}) {
  return (
    <>
    <div className="screen-cont">
      <div className="ip">{first}</div>
      <div className='op'>{second}</div>
    </div>
    </>
  )
}
