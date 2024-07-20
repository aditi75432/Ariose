import React from 'react'
import '../CSS/stats.css'
const Stats = ({icon,stats_num,stats_name}) => {
  return (
    <div className='stats'>
        <div className="inner_container">
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="stats_content">                
                <h3>{stats_num}</h3>
                <p>{stats_name}</p>
            </div>
        </div>
    </div>
  )
}

export default Stats