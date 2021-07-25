function Photo(props) {
    return(
        <div className="d-flex flex-column align-items-center mb-4">
            <h3 className="h3 bg-dark text-white p-3 rounded mb-5">{props.photo.title}</h3>
            <img src={props.photo.url} alt={props.photo.title} className="w-100 rounded mb-5" style={{"max-width" : "50rem"}}/>
            <p className="bg-dark text-white p-3 mb-0 rounded" style={{"max-width" : "50rem"}}>{props.photo.explanation}</p>
        </div>
    );
}

export default Photo;