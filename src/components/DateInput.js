function DateInput(props){
    return(
            <form onSubmit={props.changeDate} className="d-flex flex-column align-items-center bg-dark rounded p-3">
                <span className="text-white pb-3">Please enter a date: (YYYY-MM-DD)</span>
                <div className="d-flex flex-row">
                    <input/>
                    <input type="submit"/>
                </div>
            </form>
    )}

export default DateInput;