import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "./Schedule.scss";

export default function Schedule() {
  return (
    <div
      className="schedule-container"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <h2 className="schedule-heading">Schedule</h2>
      <Tabs>
        <TabList>
          <Tab>Day 1</Tab>
          <Tab>Day 2</Tab>
          <Tab>Day 3</Tab>
        </TabList>

        <TabPanel className="table">
          <div className="row-set">
            <div className="row">
              <div className="col session-name">Opening Ceremony</div>
              <div className="col session-time">6:00pm IST</div>
            </div>
            <div className="row">
              <div className="col session-name">Opening Ceremony</div>
              <div className="col session-time">6:00pm IST</div>
            </div>
            <div className="row">
              <div className="col session-name">Opening Ceremony</div>
              <div className="col session-time">6:00pm IST</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
