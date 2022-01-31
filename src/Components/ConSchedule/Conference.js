import React from "react";

export default function Conference() {
  return (
    <table class="table table-hover table-bordered text-center">
      <thead>
        <tr>
          <th scope="col" width="50%">
            Event
          </th>
          <th scope="col" width="30%">
            Speaker
          </th>
          <th scope="col" width="20%">
            Time
          </th>
        </tr>
      </thead>
      <tbody>
          <tr>
              <td>Google Summer of Code with TensorFlow </td>
              <td>Shivay Lamba</td> 
              <td>1 Feburary, 7:30 PM</td>
          </tr>
          <tr>
              <td>Let’s flutter with Himanshu</td>
              <td>Himanshu Sharma</td> 
              <td>3 Feburary, 6 PM</td>
          </tr>
          <tr>
              <td>The Surprising Power of Remote Work</td>
              <td>Santosh Yadav</td> 
              <td>2 Feburary, 8:30 PM</td>
          </tr>
          <tr>
              <td>Developer Portfolio - NextJS, Storyblok and Postman</td>
              <td>Abir Pal</td> 
              <td>8 Feburary, 7 PM</td>
          </tr>
          <tr>
              <td>Rust, WASM and Blockchain</td>
              <td>Faisal Ahmed</td> 
              <td>10 Feburary, 8 PM</td>
          </tr>
          <tr>
              <td>Web3.0 with HackClub</td>
              <td>Harsh Bajpai</td> 
              <td>12 Feburary, 8 PM</td>
          </tr>
          <tr>
              <td>Hackathon cultures among communities</td>
              <td>HackSkill2</td> 
              <td>15 Feburary, 8 PM</td>
          </tr>
          <tr>
              <td>Introduction to DevSecOps | K8s & Docker</td>
              <td>Sangam Biradar</td> 
              <td>17 Feburary, 8 PM</td>
          </tr> 
          <tr>
              <td>Working in the UK</td>
              <td>Praveen Kumar Purushothaman</td> 
              <td>19 Feburary, 8 PM</td>
          </tr> 
          <tr>
              <td>MS Edge Extensions</td>
              <td>Siv Souvam</td> 
              <td>22 Feburary, 7 PM</td>
          </tr>
          <tr>
              <td>ML Algos + TF</td>
              <td>Rishit Dagli + Kartikey Rawat</td> 
              <td>24 Feburary, 8 PM</td>
          </tr>
          <tr>
              <td>Entrepreneurship & How to Ace in the community</td>
              <td>Sawo Labs</td> 
              <td>26 Feburary, 8 PM</td>
          </tr>
      </tbody>
    </table>
  );
}
