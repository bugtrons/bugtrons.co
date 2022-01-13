import React from 'react'
import "./SwagCard.scss"

function SwagCard({data}) {
    return (
        <div className="swagCard">
            <div className="swag-img">
                <img src={data.src} alt={data.alt} height={data.height} width={data.width} />
            </div>
            <div className="text-center swag-description">
               {data.description}
            </div>
        </div>
    )
}

export default SwagCard
