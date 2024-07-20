import React from 'react'
import './prize.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Prize({pos,img,amt}) {
  return (
    <div className='prize'>
        <div className="pos">
            <h1>{pos}</h1>
        </div>
        <div className="img">
            <img src={img} alt="" />
        </div>
        <h3 style={{paddingBottom:"-100px"}}>Cash Prize:</h3>
        <div className="amt">
            <h3 ><CurrencyRupeeIcon />{amt}</h3>
        </div>
    </div>
  )
}

export default Prize