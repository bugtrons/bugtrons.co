import React from 'react'
import Top20 from './Top20/Top20'
import Top10 from './Top10/Top10'
import Top3 from './Top3/Top3'
import './Leaderboard.scss'
export default function Leaderboards() {
  return (
    <div className="leader">
    <div>Leaderboards</div>
    <Top3 />
    <Top10 />
    <Top20 />
    </div>
  )
}
