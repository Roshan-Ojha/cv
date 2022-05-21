import React from "react";
function AchievementsInput(props) {
  const [data, setdata] = React.useState("");
  const submithandler = (event) =>
  {
      event.preventDefault();
      props.onAchievementChange(data);
  }
  return (
    <div>
      <form onSubmit={submithandler}>
        <div>
          <label>Achievements</label>
        </div>
        <div>
          <label>Title:</label>
          <input
            name="title"
            type="text"
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          ></textarea>
        </div>
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
}
export default AchievementsInput;
