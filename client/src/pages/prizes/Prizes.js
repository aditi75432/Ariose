import React from 'react'
import Prize from './Prize'
import './prizes.css'
import winner from './img/winner.png'
import second from './img/first-runner.png'
import third from './img/second-runner.png'


function Prizes() {
  return (
    <div className="prizes_body">
      <div className="prizes_head">
          <h4 className='prizeheading'>PRIZES</h4> 
          <h4 className='prizeheading'>PRIZES</h4> 
          <h4 className='prizeheading'>PRIZES</h4> 
       </div>
    <div className='prizes'>
        <Prize pos='First Prize' img={winner} amt='5000' />
        <Prize pos='Second Prize' img={second} amt='3000' />
        <Prize pos='Third Prize' img={third} amt='2000' />
    </div>
    </div>
  )
}

export default Prizes