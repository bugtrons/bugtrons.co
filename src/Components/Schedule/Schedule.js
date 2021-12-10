import React from "react";
import "./Schedule.scss";

export default function Schedule() {
  return (
    <>
      <div className="schedule">
        <h3 className="schedule-head">Schedule</h3>
        <table className="table table-hover ">
          <tbody>
            <tr>
              <th rowspan="4">Day 1</th>
            </tr>
            <tr>
              <td>Opening Ceremony</td>
            </tr>
            <tr>
              <td>Round 1 - DSA Competition</td>
            </tr>

            <tr>
              <td>Announcement of top 20 winners</td>
            </tr>

            <tr>
              <th rowspan="4">Day 2</th>
            </tr>

            <tr>
              <td>Round 2 - Debugging Contest</td>
            </tr>
            
            <tr>
              <td>Announcement of top 10 winners</td>
            </tr>
            <tr>
              <td>XYZ Session</td>
            </tr>
            <tr>
              <th rowspan="4">Day 3</th>
            </tr>
            <tr>
              <td>Final Round - DSA Competition</td>
            </tr>
            <tr>
              <td>Announcement of top 3 winners and Closing Ceremony</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
