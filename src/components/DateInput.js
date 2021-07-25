function DateInput(props){
    return(
        <div>
            <form onSubmit={props.changeDate}>
                Please enter a date: (YYYY-MM-DD)
                <input/>
                <input type="submit"/>
            </form>
        </div>
    )}

export default DateInput;