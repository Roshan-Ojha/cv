import React from "react";
import './css/introduction.css'
function Introduction(props) {
  function getData(event) {
    props.onIntroChange(event);
  }

  return (
    <div>
      <div>General Introduction</div>
      <form class="form">
        <div>
          <label class="labelsy">Name</label>
          <input type="text" name="name" onChange={getData}></input>
        </div>
        <div>
          <label class="labelsy">Phone</label>
          <input type="text" name="phone" onChange={getData}></input>
        </div>
        <div>
          <label class="labelsy">Email</label>
          <input type="email" name="email" onChange={getData}></input>
        </div>
        <div>
          <label class="labelsy">Address</label>
          <input type="text" name="address" onChange={getData}></input>
        </div>
      </form>
    </div>
  );
}

export default Introduction;
