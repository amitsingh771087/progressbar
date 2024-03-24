import React, { useEffect, useState } from 'react'
// import "./style.css";

const ProgressBar = ({value=0}) => {
    const[percentage, setpercentage]=  useState(value)
    useEffect(()=>{
        setpercentage(Math.min(100,Math.max(value,0)))
    },[value])
  return (
    <div className='progress'>
        <span 
            style={{color:percentage>49 ? "White":"black"}}
        >{percentage.toFixed()}%</span>
        <div style={{width: `${percentage}%`}} role='progressbar' aria-valuemax={100} aria-valuemin={0} aria-valuenow={percentage.toFixed()}/>
    </div>
    
           
        )
    }
    
   


export default ProgressBar