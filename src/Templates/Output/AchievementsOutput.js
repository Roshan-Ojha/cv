function AchievementsOutput(props)
{
    return(
        props.achievementOutput.map(data => 
            <div>
                <div>{data.title}</div>
                <div>{data.description}</div>
            </div>
        )
    );
}
export default AchievementsOutput;