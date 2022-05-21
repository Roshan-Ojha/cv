import React from "react";


function EduOutput(props) {
  return props.outputEdu.map(data => <div>
    <div>Level:</div>
    <div>{data.level}</div>
    <div>Institution:</div>
    <div>{data.institution}</div>
    <div>Address:</div>
    <div>{data.address}</div>
    <div>
    <div>From:</div>
    <div>{data.from}</div>
    <div>To:</div>
    <div>{data.to}</div>
    </div>
  </div>)

}
export default EduOutput;
