import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./Schedule.scss";
import { Link } from "react-router-dom";

export default function Schedule() {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-mirror="true"
      data-aos-easing="ease-in-out"
      id="schedule"
    >
      <div className="schedule">
        <div className="schedule-head">Schedule</div>
        <div className="context">
          <Link to="/connect">
            <p>Click to see our pre event page</p>
          </Link>
        </div>
        <Tabs
          defaultActiveKey="Mar3"
          id="uncontrolled-tab-example"
          className="mb-3 tabs"
        >
          <Tab eventKey="Mar3" title="Mar 3">
            <table class="table table-hover table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col" width="70%">
                    Event
                  </th>
                  <th scope="col" width="30%">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Opening Ceremony</td>
                  <td> 6.00 PM </td>
                </tr>
                <tr>
                  <td>Fun event - (online browser game) on discord</td>
                  <td> 9.00 PM </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Mar4" title="Mar 4" classname="mb-3 tab">
            <table class="table table-hover table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col" width="70%">
                    Event
                  </th>
                  <th scope="col" width="30%">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>Interview Experience with MVP | Rishika Gupta</td>
                  <td> 7.00 PM </td>
                </tr>
                <tr>
                  <td>Round 1 - DSA Competition</td>
                  <td> 8.00 PM </td>
                </tr>
                <tr>
                  <td>Announcement of top 20 winners</td>
                  <td> Next Day </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Mar5" title="Mar 5">
            <table class="table table-hover table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col" width="70%">
                    Event
                  </th>
                  <th scope="col" width="30%">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Announcement of top 20 winners</td>
                  <td> 11.00 AM </td>
                </tr>
              <tr>
                <td>Acing the JavaScript Interview | Smile Gupta</td>
                  <td> 6.30 PM </td>
                </tr>
                <tr>
                  <td>Round 2 - Debugging Round</td>
                  <td> 8.00 PM </td>
                </tr>
                <tr>
                  <td>
                    Interaction Session with Participants on discord (@bugtrons)
                  </td>
                  <td> 11.30 PM </td>
                </tr>
                <tr>
                  <td>Announcement of top 10 winners</td>
                  <td> Next day </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Mar6" title="Mar 6">
            <table class="table table-hover table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col" width="70%">
                    Event
                  </th>
                  <th scope="col" width="30%">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Announcement of top 10 winners</td>
                  <td> 11.00 AM  </td>
                </tr>
                <tr>
                  <td>Resume/LinkedIn Review</td>
                  <td> 7.00 PM </td>
                </tr>
                <tr>
                  <td>Final Round - DSA Competition</td>
                  <td> 8.00 PM </td>
                </tr>
                <tr>
                  <td>Resume/LinkedIn Review</td>
                  <td> 10.00 PM </td>
                </tr>
                <tr>
                  <td>
                    Hangout Session with Participants on discord (@bugtrons)
                  </td>
                  <td> 11.00 PM </td>
                </tr>
                <tr>
                  <td>
                    Winners announcement and Closing ceremony, Closing notes by
                    Prepinsta.
                  </td>
                  <td> Next Day </td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
