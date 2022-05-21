function SkillInput(props) {
  function getSkill(event) {
    event.preventDefault();
    props.onSkillChange(event.target.skill.value);
  }

  return (
    <form onSubmit={getSkill}>
      <div>
        <label>Skills</label>
        <input name="skill" type="text"></input>
      </div>
      <div>
          <input type="submit"></input>
      </div>
    </form>
  );
}
export default SkillInput;
