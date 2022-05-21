function AboutInput(props)
{
    function onTextChange(event)
    {
        props.onAboutChange(event.target.value);
    }

    return(
        <div>
            <div><label>About Yourself:</label></div>
            <div><textarea onChange={onTextChange}></textarea></div>
        </div>
    );
}
export default AboutInput;