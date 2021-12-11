import React from 'react'
import './bug.scss'


export const Bug  = ({Image , name}) => {
    return (   
        <div> 
            <div className= 'bug1'  >
               <img src={Image}  alt=''/>
            </div>
            <p>{name}</p>
        </div>
    )
}
