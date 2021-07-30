function DateInput(props){
    return(
            <form onSubmit={props.changeDate} className="d-flex flex-column align-items-center bg-dark rounded p-3 mb-3 col-12 col-lg-3">
                <div className="d-flex flex-column">
                    <label for="datePicker" className="text-white align-self-center">Pick a date:</label>
                    <input type="date" className="form-control" placeholder="YYYY-MM-DD" format="YYYY-MM-DD" id="datePicker"/>
                    <input type="submit" />
                </div>
            </form>
    )}

export default DateInput;