import React from 'react'
import Top20 from './Top20/Top20'
import './Leaderboard.scss'
export default function Leaderboards() {
  return (
    <div className="leader">
    <div>Leaderboards</div>
    <Top20 />
    </div>
  )
}
