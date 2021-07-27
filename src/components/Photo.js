function Photo(props) {
    return(
        <div className="d-flex flex-column align-items-center align-items-lg-start flex-lg-row mb-4">
            <img src={props.photo.url} alt={props.photo.title} className="w-100 rounded mb-3" style={{"max-width" : "40rem"}}/>
            <div className="d-flex flex-column px-3">
                <h3 className="h3 bg-dark text-white p-3 rounded mb-3">{props.photo.title}</h3>
                <p className="bg-dark text-white p-3 mb-0 rounded" style={{"max-width" : "50rem"}}>{props.photo.explanation}</p>
            </div>
        </div>
    );
}

export default Photo;