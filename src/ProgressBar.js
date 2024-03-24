import React, { useEffect, useState } from 'react'
// import "./style.css";
import{ MAX , MIN } from './components/constants'

const ProgressBar = ({value=0}) => {
    const[percentage, setpercentage]=  useState(value)
    useEffect(()=>{
        setpercentage(Math.min(MAX,Math.max(value,MIN)))
    },[value])
  return (
    <div className='progress'>
        <span 
            style={{color:percentage>49 ? "White":"black"}}
        >{percentage.toFixed()}%</span>
        <div style={{width: `${percentage}%`}} role='progressbar' aria-valuemax={MAX} aria-valuemin={MIN} aria-valuenow={percentage.toFixed()}/>
    </div>
    
           
        )
    }
    
   


export default ProgressBar