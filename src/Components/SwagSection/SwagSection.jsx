import React from 'react'
import "./SwagSection.scss"
import SwagCard from '../SwagCard/SwagCard'

function SwagSection({title,data}) {
    return (
        <div className="swag-section">
            <div className="line"> 
            </div>
            <div className="title">
                 {title}
            </div>
            <div className="cards">
                {data.map((datas,index) => {
                    return (
                        <SwagCard key={index} data={datas} />
                    )
                })}
            </div>
        </div>
    )
}

export default SwagSection
