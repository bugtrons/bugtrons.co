import React from "react";
import "./champions.scss";
import  Bug  from "./bugs/bug";
import image from "./bugs/1.png";
export const Champions = () => {
  return (
    <div>
      <div className="Heading">
        <h2>Champions</h2>
      </div>
      <div className="bugs">
        <div className="bug-second">
          <Bug name="Name 2" Image={image} />
        </div>

        <div className="bug-first">
          <Bug name="Name 1" Image={image} />
        </div>
        <div className="bug-second champ-active">
          <Bug name="Name 2" Image={image} />
        </div>
        <div className="bug-third">
          <Bug name="Name 3" Image={image} />
        </div>
      </div>
    </div>
  );
};
