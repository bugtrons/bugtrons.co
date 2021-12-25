import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./Schedule.scss";

export default function Schedule() {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
    >
      <div className="schedule">
        <div className="schedule-head">Schedule</div>
        <Tabs
          defaultActiveKey="Day1"
          id="uncontrolled-tab-example"
          className="mb-3 tabs"
        >
          <Tab eventKey="Day1" title="Day 1" classname="mb-3 tab">
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
                  <td> -- </td>
                </tr>
                <tr>
                  <td>Round 1 - DSA Competition</td>
                  <td> -- </td>
                </tr>
                <tr>
                  <td>Announcement of top 20 winners</td>
                  <td> -- </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Day2" title="Day2">
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
                  <td>Round 2 - Debugging Contest</td>
                  <td> -- </td>
                </tr>
                <tr>
                  <td>Announcement of top 10 winners</td>
                  <td> -- </td>
                </tr>
                <tr>
                  <td>XYZ Session</td>
                  <td> -- </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Day3" title="Day3">
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
                  <td>Final Round - DSA Competition</td>
                  <td> -- </td>
                </tr>
                <tr>
                  <td>Announcement of top 3 winners and Closing Ceremony</td>
                  <td> -- </td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
