import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Conference from "./Conference"
import "./ConSchedule.scss"

export default function ConSchedule() {
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
      <div className="conschedule">
       <div className="head">
          BUGTRONS CONNECT SCHEDULE        
       </div>       
      <Tabs defaultActiveKey="Con"
          id="uncontrolled-tab-example"
          className="mb-3 tabs">
          <Tab eventKey="Con" title="Conference" classname="mb-3 tab">
               <Conference />   
          </Tab>    
       </Tabs>
      </div>
    </div>
  );
}
