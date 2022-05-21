function ExperienceOutput(props) {
  return props.experienceOutput.map((data) => (
    <div>
      <div>Experiences:</div>
      <div>{data.post}</div>
      <div>{data.company}</div>
      <div>
        From {data.from} to {data.to}
      </div>
    </div>
  ));
}
export default ExperienceOutput;
