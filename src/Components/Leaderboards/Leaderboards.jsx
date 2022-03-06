import React from 'react'
import Top20 from './Top20/Top20'
import Top10 from './Top10/Top10'
import './Leaderboard.scss'
export default function Leaderboards() {
  return (
    <div className="leader">
    <div>Leaderboards</div>
    <Top10 />
    <Top20 />
    </div>
  )
}
