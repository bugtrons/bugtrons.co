import React from 'react'
import './sponsor.Logo.scss'
export const SponsorLogo = ({image}) => {
    return (
        <div className='SponsorLogo'>
            <img  src={image} alt="sponsor Logo"  />
        </div>
    )
}
