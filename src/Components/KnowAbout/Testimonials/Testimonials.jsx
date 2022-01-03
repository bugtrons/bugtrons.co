import React from 'react'
import './Testimonials.scss'
export const Testimonials = ({profile, name, position,description}) => {
    return (
        <div className='testimonials'>
            <div className='image'>
                <img src={profile} alt="previous winner" />
            </div>
            <div className='testimonialscard'>
                <h1>{name}</h1>
                <h2>{position}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}