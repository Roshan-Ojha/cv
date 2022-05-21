import React from "react";
function ExperienceInput(props) {
  const [data, setdata] = React.useState("");
  const submitHandler = (event) =>
  {
    event.preventDefault();
    props.onExperienceChnange(data);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Post:</label>
          <input
            name="post"
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label>Company</label>
          <input
            name="company"
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label>From:</label>
          <input
            name="from"
            type="date"
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label>To:</label>
          <input
            name="to"
            type="date"
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          ></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
}
export default ExperienceInput;
