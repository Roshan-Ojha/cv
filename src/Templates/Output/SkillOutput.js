function SkillOutput(props)
{
    return (
        props.outputSkill.map(data => 
            <div>
                {data}
            </div>
            )
    );
}
export default SkillOutput;