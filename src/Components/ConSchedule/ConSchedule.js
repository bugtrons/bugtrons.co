import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Conference from "./Conference";
import Podcast from "./Podcast";
import "./ConSchedule.scss";

export default function ConSchedule() {
  return (
    <div id="schedule">
      <div className="conschedule">
        <div className="head">SCHEDULE</div>
        <Tabs
          defaultActiveKey="Con"
          id="uncontrolled-tab-example"
          className="mb-3 tabs"
        >
          <Tab eventKey="Con" title="Conference" classname="mb-3 tab">
            <Conference />
          </Tab>
          <Tab eventKey="Pod" title="Podcast" classname="mb-3 tab">
            <Podcast />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
