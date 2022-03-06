import React from "react";
import Data from "./Data";
export default function Top10() {
  return (
    <>
      <div className="Top-head">Top 10 Hackers</div>
      <div className="Lead-card">
        <div className="high">
          <p>Rank</p>
          <p className="name">Name</p>
          <p>Score</p>
        </div>
        {Data.map((data, index) => {
          return (
            <div className="part" key={index}>
              <p>{data.Rank}</p>
              <p className="name">{data.name}</p>
              <p>{data.score}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
