import React from "react";
function Intro(props) {
  return (
    <div>
      <div>
        <div>Name:</div>
        <div>{props.outputIntro.name}</div>
      </div>
      <div>
        <div>Phone:</div>
        <div>{props.outputIntro.phone}</div>
      </div>
      <div>
        <div>Email:</div>
        <div>{props.outputIntro.email}</div>
      </div>
      <div>
        <div>Address:</div>
        <div>{props.outputIntro.address}</div>
      </div>
    </div>
  );
}
export default Intro;
