import React from "react";

function Education(props) {
  function onFormSubmit(event) {
    event.preventDefault();
    props.onEduChange(event);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Level:</label>
          <input type="text" name="level" required></input>
        </div>
        <div>
          <label>Institution:</label>
          <input type="text" name="insti" required></input>
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" required></input>
        </div>
        <div>
          <div>
            <label>from:</label>
            <input type="date" name="from" required></input>
          </div>
          <div>
            <label>To:</label>
            <input type="date" name="to" required></input>
          </div>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
}
export default Education;
