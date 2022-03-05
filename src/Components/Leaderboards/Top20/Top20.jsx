import React from "react";
import Data from "./Data";
export default function Top20() {
  return (
    <>
      <div className="Top-head">Top 20 Hackers</div>
      <div className="Lead-card">
        <div className="row high">
          <p className="col-3">Rank</p>
          <p className="col-6 name">Name</p>
          <p className="col-3">Score</p>
        </div>
        {Data.map((data, index) => {
          return (
            <div className="row part" key={index}>
              <p className="col-3">{data.Rank}</p>
              <p className="col-6 name">{data.name}</p>
              <p className="col-3">{data.score}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
