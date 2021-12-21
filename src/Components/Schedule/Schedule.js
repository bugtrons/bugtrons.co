import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Schedule.scss";

export default function Schedule() {
  // var act=1;
  // var tab1= document.getElementById("1");
  // var tab2= document.getElementById("2");
  // var tab3= document.getElementById("3");
  function Active(props) {
    // console.log(props);
    //   // tab1.classList.remove("active");
    //   // tab2.classList.remove("active");
    //   // tab3.classList.remove("active");
    //   if(act===1){
    //     tab1.classList.remove("active");
    //   }else if(act===2){
    //     tab2.classList.remove("active");
    //   }else{
    //     tab3.classList.remove("active");
    //   }
    //   if(props===1){
    //     tab1.classList.add("active");
    //     act=1;
    //   }else if(props===2){
    //     tab2.classList.add("active");
    //     act=2;
    //   }else{
    //     tab3.classList.add("active");
    //     act=3;
    //   }
  }

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
        <Tabs>
          <TabList className="tabs">
            <Tab>
              <div className="tab-box">
                <div id="1" className="box" onClick={() => Active(1)}>
                  Day 1
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="tab-box">
                <div id="2" className="box" onClick={() => Active(2)}>
                  Day 2
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="tab-box">
                <div id="3" className="box" onClick={() => Active(3)}>
                  Day 3
                </div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <table class="table table-striped table-bordered text-center">
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
          </TabPanel>
          <TabPanel>
            <table class="table table-striped table-bordered text-center">
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
          </TabPanel>
          <TabPanel>
            <table class="table table-striped table-bordered text-center">
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
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
