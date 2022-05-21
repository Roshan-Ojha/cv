import "./App.css";
import React from "react";
import Intro from "./Templates/Output/intro_output";
import Introduction from "./Templates/Input/introduction";
import Education from "./Templates/Input/educationInput";
import EduOutput from "./Templates/Output/educationOutput";
import SkillInput from "./Templates/Input/SkillInput";
import SkillOutput from "./Templates/Output/SkillOutput";
import AboutInput from "./Templates/Input/AboutInput";
import AboutOutput from "./Templates/Output/AboutOutput";
import AchievementsInput from "./Templates/Input/AchievementsInput";
import AchievementsOutput from "./Templates/Output/AchievementsOutput";
import ExperienceInput from "./Templates/Input/ExperienceInput";
import ExperienceOutput from "./Templates/Output/ExperienceOutput";
function App() {
  const [intro, chanageIntro] = React.useState("");
  const [edu, eduChange] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  const [about, setAbout] = React.useState("");
  const [achievement, setAchievement] = React.useState([]);
  const [experience, setExperience] = React.useState([]);
  const eduData = {};

  function getIntroInput(event) {
    const value = event.target.value;
    chanageIntro({
      ...intro,
      [event.target.name]: value,
    });
  }

  function getEduInput(event) {
    const formdata = new FormData(event.target);
    eduData.level = formdata.get("level");
    eduData.institution = formdata.get("insti");
    eduData.address = formdata.get("address");
    eduData.from = formdata.get("from");
    eduData.to = formdata.get("to");
    eduChange([...edu, eduData]);
  }

  function skillChange(value) {
    setSkills([...skills, value]);
  }

  function AboutChange(value) {
    setAbout(value);
  }

  const AchievementChanage = (value) => {
    setAchievement([...achievement, value]);
  };

  const ExperienceChnage = (value) => {
    setExperience([...experience, value]);
  };

  return (
    <div id="all">
      <div id="left">
        <div>
          <Introduction onIntroChange={getIntroInput}></Introduction>
        </div>
        <div>
          <Education onEduChange={getEduInput}></Education>
        </div>
        <div>
          <SkillInput onSkillChange={skillChange}></SkillInput>
        </div>
        <div>
          <AboutInput onAboutChange={AboutChange}></AboutInput>
        </div>
        <div>
          <AchievementsInput
            onAchievementChange={AchievementChanage}
          ></AchievementsInput>
        </div>
        <div>
          <ExperienceInput
            onExperienceChnange={ExperienceChnage}
          ></ExperienceInput>
        </div>
      </div>
      <div id="right">
        <div>
          <Intro outputIntro={intro}></Intro>
        </div>

        <div>
          <EduOutput outputEdu={edu}></EduOutput>
        </div>

        <div>
          <SkillOutput outputSkill={skills}></SkillOutput>
        </div>

        <div>
          <AboutOutput outputAbout={about}></AboutOutput>
        </div>

        <div>
          <AchievementsOutput
            achievementOutput={achievement}
          ></AchievementsOutput>
        </div>

        <div>
          <ExperienceOutput experienceOutput={experience}></ExperienceOutput>
        </div>
      </div>
    </div>
  );
}

export default App;
